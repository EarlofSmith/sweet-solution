const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderDetailRoutes = require('./orderDetailRoutes');
const reviewRoutes = require('./reviewRoutes');


router.use('/', homeRoutes);
router.use('/order', orderRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order_detail', orderDetailRoutes);
router.use('/review', reviewRoutes)
module.exports = router;