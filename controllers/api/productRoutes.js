const router = require('express').Router();
const { Product } = require('../../models')


// route to get all orders
router.get('/', async (req, res) => {
  const productData = await Product.findAll().catch((err) => {
    res.json(err);
  });
  const products = productData.map((product) => product.get({ plain: true }));
  // res.status(200).json(productData);
  // res.render('product', {productData});
  console.log(products); 
  res.render('product-gallery', {products}); 
});

// route to get an Product by specific id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);
    if(productData) {
      const Product = productData.get({ plain: true });
      res.render('product', {Product});
    }else {
      res.status(400).json({ message: 'No Product with that id!'});
      return;
    }
    
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;