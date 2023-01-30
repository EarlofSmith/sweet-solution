const router = require('express').Router();
const auth = require('../utils/auth');

router.use('/', homeRoutes);

router.get('/', auth, async (req, res) => {
    try {
        const categoriesData = await Category.findAll();
        const categories = categoriesData.map(
            (category) => category.get({ plain: true }));
        //res.status(200).json(categories);
        //res.render('<model type>', { <model type> });

    } catch(err) {
        res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us"});
    }
});
module.exports = router;
