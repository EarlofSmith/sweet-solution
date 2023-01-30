const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');


router.post('/login', auth, async (req, res) => {
    try {
        const userDb = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!userDb) {
            res.status(404).json({message: `A user with that email currently does not exist in the User database.
              Please use a registered email, or create and account.`});
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userDb.password);
        if (!validPassword) {
            res.status(404).json({message: 'Your password is incorrect. Please use a registered email, or create and account.'});
            return; 
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({message: 'Login succeeded.'});
        });

    } catch(err) {
        res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us"});
    }
});


// GET all users
router.get('/user', async, async (req, res) => {
  try {
    const userData = await User.findAll();
    if (!userData) {
      res.status(404).json({ message: 'No user data!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET one user
router.get('/user/:id', async, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST create a new user
router.post('/', async, async (req, res) => {
  try {
    const userData = await User.create({
     //
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// PUT update a user
router.put('/:id', async, async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      // Cancel user.
      // Set "status" field to "Cancelled"
      //
      // Re-Activate user.
      // Set "status" field to "Registered"
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
