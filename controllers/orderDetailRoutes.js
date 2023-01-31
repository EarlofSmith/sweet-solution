const router = require('express').Router();
const { Order_Detail} = require('../models')


// route to get all Order_Details
router.get('/', async (req, res) => {
  const Order_DetailData = await Order_Detail.findAll().catch((err) => {
    res.json(err);
  });
  const Order_Details = Order_DetailData.map((Order_Detail) => Order_Detail.get({ plain: true}));
  res.render('order', {Order_Details});
});

// route to get an Order_Detail by specific id
router.get('/:id', async (req, res) => {
  try {
    const Order_DetailData = await Order_Detail.findByPk(req.params.id);
    if(!Order_DetailData) {
      res.status(400).json({ message: 'No Order_Detail with that id!'});
      return;
    }
    const Order_Detail = Order_DetailData.get({ plain: true })
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;