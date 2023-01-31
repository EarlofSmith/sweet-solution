const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');


router.use('/', homeRoutes);
router.use('/order', orderRoutes);
router.use('/users', userRoutes);
router.use('/product', productRoutes);

module.exports = router;