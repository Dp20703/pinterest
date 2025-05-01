var express = require('express');
const userModel = require('../models/user.model');
var router = express.Router();

router.get('/create', async function (req, res, next) {

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

module.exports = router;
