const router = require('express').Router();
const { Review, Product, User } = require('../models');

// get all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [{ model: Product }, {model: User}]
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
  
});

// create a new review
router.post('/', async (req, res) => {
  
});

// delete a review by id
router.delete('/:id', async (req, res) => {
  
});
module.exports = router;