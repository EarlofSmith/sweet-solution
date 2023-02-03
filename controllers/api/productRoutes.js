const router = require('express').Router();
const Product = require('../../models/Product'); 
const Category = require('../../models/Category'); 
const auth = require('../../utils/Auth');


// GET all products.
router.get('/', async (req, res) => {
    try {

        const productData = await Product.findAll({
          include: {
            model: Category
          }
        });
        res.status(200).json(productData);
        // const product = productData.map((product) => product.get({ plain: true }));
        // res.render('product-gallery'); 

    } catch(err) {
      res.status(500).json(err);
    };
  });


// GET a product by specific ID.
router.get('/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id);
      if(productData) {
        const product = productData.get({plain: true});
        res.render('product', {product});
        res.status(200).json(productData);

      } else {
        res.status(404).json({message: 'There is not a product that has that ID.'});
        return;
      }
      
    } catch(err) {
      res.status(500).json(err)
    }
  });


// POST create a new product.
router.post('/', async (req, res) => {  // TO-DO: Re-add "auth,".
    try {
      const productData = await Product.create({
        product_name: req.body.product_name, 
        category_id: req.body.category_id, 
        price_per: req.body.price_per, 
        description: req.body.description
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// PUT update a product.
router.put('/:id', async (req, res) => {  // TO-DO: Re-add "auth,".
    try {
      const productData = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!productData[0]) {
        res.status(404).json({message: 'There is not a product that has that ID.'});
        return;
      }
      res.status(200).json({message: 'The selected product was updated.'});
    } catch (err) {
      res.status(500).json(err);
    }
  });


// DELETE a product.
router.delete('/:id', async (req, res) => {  // TO-DO: Re-add "auth,".
    try {
      const productData = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!productData) {
        res.status(404).json({message: 'There is not a product that has that ID.'});
        return;
      }
      res.status(200).json({message: 'The selected product was deleted.'});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 
