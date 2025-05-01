var express = require('express');
const userModel = require('../models/user.model');
const passport = require('passport');
var router = express.Router();
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

// users/create
router.post('/create', async function (req, res, next) {
  const user = await userModel.create({
    userName: 'dp_2073',
    fullName: 'Darshan',
    email: 'n24@example.com',
    password: '123456'
  })
  res.send({ 'newUser': user });
});

// users/allposts
router.get('/allposts', async function (req, res, next) {
  const users = await userModel.findOne({ _id: '68134c4b1ec98056cf4c6785' }).populate('posts');
  res.send({ 'users': users });
});

// users/register
router.post('/register', function (req, res) {
  const { userName, email, fullName } = req.body;
  const userData = new userModel({ userName, email, fullName })
  // console.log(userData);

  // register user
  userModel.register(userData, req.body.password).
    then(function () {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/users/profile');
      })
    })
  res.send({ 'newUser': newUser });
});

// users/login
router.post('/login', passport.authenticate('local', { successRedirect: '/users/profile', failureRedirect: '/users/login' }), function (req, res) {
});

// users/logout
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// users/profile
router.get('/profile', isLoggedIn, function (req, res) {
  res.send("Profile page");
});

// isLoggedIn
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
module.exports = router;
