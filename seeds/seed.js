const seedOrders = require('./order-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');
  
}