const router = require('epxress').router;
const { Order, User, Product } = ('../models')


// route to get all orders
router.get('/', async (req, res) => {
  const orderData = await Order.findAll().catch((err) => {
    res.json(err);
  });
  const orders = orderData.map((order) => order.get({ plain: true}));
  res.render('all', {orders});
});

// route to get an order by specific id
router.get('/:id', async (req, res) => {
  try {
    const orderData = await Order.findByPk(req.params.id);
    if(!orderData) {
      res.status(400).json({ message: 'No order with that id!'});
      return;
    }
    const order = orderData.get({ plain: true })
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;