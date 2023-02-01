const router = require('express').Router();


const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderDetailRoutes = require('./orderDetailRoutes')



router.use('/order', orderRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order_detail', orderDetailRoutes);
module.exports = router;