const router = require('express').Router();
const Category = require('../../models/Category');
const Product = require('../../models/Product'); 
const bcrypt = require('bcrypt');
const auth = require('../../utils/Auth');

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product }], 
        });

        console.log(categories); 
        res.status(200).json(categoryData);
        // const categories = categoryData.map((category) => category.get({ plain: true }));
        // res.render('category-gallery', {categories}); 

    } catch(err) {
      res.status(500).json(err);
    };
  });


// GET a Category by specific id
router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id);
      if(categoryData) {
        const category = categoryData.get({ plain: true });
        // res.render('category', {category});
        res.status(200).json(categoryData);

      } else {
        res.status(400).json({ message: 'No category with that id!'});
        return;
      }
      
    } catch(err) {
      res.status(500).json(err)
    }
  });


  // POST create a new category
router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create({
       category_name: req.body.category_name, 
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


// PUT update a user
router.put('/:id', async (req, res) => {
    try {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json( {message: 'Category deleted.'} );
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router; 