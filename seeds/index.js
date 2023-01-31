const seedOrders = require('./order-seeds');
const seedUsers = require('./userSeed'); 
const seedCategory = require('./category-seed'); 
const seedProducts = require('./product-seed'); 


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  // await seedOrders();
  // console.log('\n----- ORDERS SEEDED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
 
  await seedCategory();
  console.log('\n----- CATEGORY SEEDED -----\n');
  
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  process.exit(0); 
}

seedAll();