const router = require('express').Router();
const { Order, User, Product } = ('../models')


// route to get all orders
router.get('/', async (req, res) => {
//   const productData = await Product.findAll().catch((err) => {
//     res.json(err);
//   });
//   const Products = productData.map((Product) => Product.get({ plain: true}));
  res.render('product');
});

// route to get an Product by specific id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);
    if(!productData) {
      res.status(400).json({ message: 'No Product with that id!'});
      return;
    }
    const Product = productData.get({ plain: true })
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;