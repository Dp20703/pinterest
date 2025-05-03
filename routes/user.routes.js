var express = require('express');
const userModel = require('../models/user.model');
const passport = require('passport');
var router = express.Router();
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

// -----------------------------Frontend routes--------------------------------------------

// users/register
router.get('/register', function (req, res) {
  res.render('register');
});
// users/login
router.get('/login', function (req, res) {
  res.render('login', { error: req.flash('error') });
});

// users/feed
router.get('/feed', function (req, res) {
  res.render('feed');
});

// users/profile
router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
});



// -----------------------------Backend routes---------------------------------------------

// users/create
// router.post('/create', async function (req, res, next) {
//   const user = await userModel.create({
//     username: 'dp_2073',
//     fullName: 'Darshan',
//     email: 'n24@example.com',
//     password: '123456'
//   })
//   res.send({ 'newUser': user });
// });

// users/allposts
// router.get('/allposts', async function (req, res, next) {
//   const users = await userModel.findOne({ _id: '68134c4b1ec98056cf4c6785' }).populate('posts');
//   res.send({ 'users': users });
// });

// users/register
router.post('/register', async function (req, res) {
  try {
    console.log("Request body", req.body);
    const { username, email, fullName } = req.body;
    if (!username) {
      return res.status(400).send('username is required');
    }

    const userData = new userModel({ username, email, fullName });
    console.log("userdata", userData);
    // Register the user
    await userModel.register(userData, req.body.password);

    // Authenticate and login the user
    passport.authenticate('local')(req, res, function () {
      res.redirect('/users/profile');
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send('Registration failed: ' + error.message);
  }
});


// users/login
router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  }),
  function (req, res) {
  });

// users/logout
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// // users/profile
// router.get('/profile', isLoggedIn, function (req, res) {
//   res.send("Profile page");
// });

// isLoggedIn
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
}
module.exports = router;
