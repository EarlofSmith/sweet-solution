const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderDetailRoutes = require('./orderDetailRoutes')


router.use('/', homeRoutes);
router.use('/order', orderRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/orderdetail', orderDetailRoutes);

module.exports = router;