
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// Possible all-system all-table bulk-seed process of the application database.

// "Categories" table seeding
//const category = require('../models/Category');
//const categorySeedData = require('./categorySeedData.js');

// "Products" table seeding
//const product = require('../models/Product');
//const productSeedData = require('./productSeedData.js');

// "Users" table seeding
const User = require('../models/User');
const userSeedData = require('./userSeed.js');

const seedUsers = () => User.bulkCreate(userSeedData)
  .then(() => {
    console.log('The database was seeded with user data.');
    //res.send('The database was seeded with user data.');
  })
  .catch((err) => {
    console.log(`ERROR: The database was not seeded with user data because of a database or 
      interface processing error.`);
    //res.json(err);
  });

// "Orders" table seeding
//const orders = require('../models/Orders');
//const orders SeedData = require('./orderSeedData.js');

// START: REMOVED TABLE
// "Previous_Orders" table seeding
//const previous_orders = require('../models/Previous_order');
//const previousOrderSeedData = require('./previous_orderSeedData.js');
// END: REMOVED TABLE

// "Reviews" table seeding
//const reviews = require('../models/Reviews');
//const reviewsSeedData = require('./reviewsSeedData.js');

module.exports = seedUsers;
//module.exports = {seedUsers, seedCategory, seedProducts, seedOrders, seedReviews};
  // seedPreviousOrders removed
  