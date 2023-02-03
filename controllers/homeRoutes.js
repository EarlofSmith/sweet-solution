const router = require('express').Router();
const auth = require('../utils/auth');
const Product = require('../models/Product')
// router.use('/', homeRoutes);

router.get('/', async (req, res) => {
    try {
        // const categoriesData = await Category.findAll();
        // const categories = categoriesData.map(
        //     (category) => category.get({ plain: true }));
        //res.status(200).json(categories);
        //res.render('<model type>', { <model type> });
        res.render("homepage", {
            
            loggedIn: req.session.loggedIn
        });

    } catch(err) {
        res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us"});
    }
});

router.get('/login', async (req, res) => {

    res.render('login',);
  });


// GET all products.
router.get('/product', (req, res) => {
  Product.findAll().then((productData) => {
    const products = productData.map((product) => product.get({ plain: true }));
    console.log('these are the products hopefully', products);
    res.render('product-gallery', { products });
  })
  .catch((err => res.status(400).json(err)));
  
  // console.log('aiuuhfuashdfu')
  // try {
      
  //     const productData = await Product.findAll();
  //     // res.status(200).json(productData);
  //     const product = productData.map((product) => product.get({ plain: true }));
  //     console.log(product, 'Some product text');
  //     res.render('product-gallery', {product}); 

  // } catch(err) {
  //   res.status(500).json(err);
  // };
});

module.exports = router;
