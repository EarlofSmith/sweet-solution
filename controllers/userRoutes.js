const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');


router.get('/login', async (req, res) => {

  res.render('login',);
});

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
router.get('/', auth, async (req, res) => {

  try {
    const userData = await User.findAll();
   
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET one user
router.get('/:id', auth, async (req, res) => {
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
router.post('/', auth, async (req, res) => {
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
router.put('/:id', auth, async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
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


// DELETE a user
router.delete('/:id', auth, async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json( {message: 'User deleted.'} );
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
