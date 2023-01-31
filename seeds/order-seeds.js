const { Order } = require('../models');

const orderData = [
  {
    "user_id": 1,
    "product_id": 1,
    "due_date": 1-31-2024,
    "quantity": 2,
    "total_price": 12.50,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 2,
    "product_id": 3,
    "due_date": 2-14-2023,
    "quantity": 1,
    "total_price": 66.00,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 3,
    "product_id": 10,
    "due_date": 2-13-2023,
    "quantity": 3,
    "total_price": 20.00,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 4,
    "product_id": [18, 23, 7],
    "due_date": 3-4-2023,
    "quantity": 1,
    "total_price": 17.50,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 5,
    "product_id": [1, 10, 18],
    "due_date": 7-14-2023,
    "quantity": 4,
    "total_price": 10.00,
    "special_instructions": "eat a lot of these items!"
  },
]

const seedOrders = () => Order.bulkCreate(orderData)

module.exports = seedOrders;