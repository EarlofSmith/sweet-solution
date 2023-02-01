const router = require('express').Router();
const { Review, Product, User } = require('../../models');

// get all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [{ model: Product }, {model: User, attributes: {exclude: 'password'}}]
    });
    if(!reviewData) {
      res.status(400).json({ message: 'No review found'})
      return;
    }
    // const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.status(200).json(reviewData)
  } catch (err) {
    res.status(500).json(err)
  }
  
});

// get review by id
router.get('/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [{ model: Product }, { model: User, attributes: {exclude: 'password'} }]
    });
    res.status(200).json(reviewData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new review / review body
// {
//    "product_id": 1,   
//    "user_id": 1,
//    "review_content": "This is a good item!",
//  }

router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json({ message: 'New review created!', reviewData})
  } catch (err) {
    res.status(400).json(err)
  }
});

// delete a review by id
router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!reviewData){
      res.status(400).json({ message: 'No review with that id!'});
      return;
    }

    res.status(200).json({ message: 'Review deleted successfully!'})
  } catch(err) {
    res.status(400).json(err)
  }
});


module.exports = router;