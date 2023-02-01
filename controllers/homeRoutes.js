const router = require('express').Router();
const auth = require('../utils/auth');

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
module.exports = router;
