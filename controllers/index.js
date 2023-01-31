const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');


router.use('/', homeRoutes);
router.use('/order', orderRoutes);
router.use('/users', userRoutes);

module.exports = router;