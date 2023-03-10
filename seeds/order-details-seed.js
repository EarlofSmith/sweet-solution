const { Order_Detail } = require('../models');

const orderDetailData = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 2,
  },
  {
    order_id: 3,
    product_id: 3,
    quantity: 3,
  },
  {
    order_id: 4,
    product_id: 4,
    quantity: 4,
  },
]

const seedOrderDetails = () => Order_Detail.bulkCreate(orderDetailData);

module.exports = seedOrderDetails;