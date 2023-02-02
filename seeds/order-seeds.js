const { Order } = require('../models');

const orderData = [
  {
    "user_id": 1,
    "product_id": 18,
    "due_date": 2023-12-24,
    "order_date": 2023-5-15,
    "total_price": 12.50,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 2,
    "product_id": 23,
    "due_date": 2023-12-24,
    "order_date": 2023-5-15,
    "total_price": 66.00,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 3,
    "product_id": 26,
    "due_date": 2023-12-24,
    "order_date": 2023-5-15,
    "total_price": 20.00,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 4,
    "product_id": 13,
    "due_date": 2023-12-24,
    "order_date": 2023-5-15,
    "total_price": 17.50,
    "special_instructions": "eat a lot of these items!"
  },
  {
    "user_id": 5,
    "product_id": 10,
    "due_date": 2023-12-24,
    "order_date": 2023-5-15,
    "total_price": 10.00,
    "special_instructions": "eat a lot of these items!"
  },
]

const seedOrders = () => Order.bulkCreate(orderData)

module.exports = seedOrders;