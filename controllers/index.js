const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const auth = require('../utils/auth');

router.use('/', homeRoutes);

// ???