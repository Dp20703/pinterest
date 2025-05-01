var express = require('express');
const postModel = require('../models/post.model');
const userModel = require('../models/user.model');
var router = express.Router();

// posts/create
router.get('/create', async function (req, res, next) {
  const newPost = await postModel.create({
    postText: 'First Post',
    user: '68134c4b1ec98056cf4c6785',
    likes: []
  })
  const user = await userModel.findOne({ _id: '68134c4b1ec98056cf4c6785' });
  user.posts.push(newPost._id);
  await user.save();
  res.send({ 'newPost': newPost });
});

module.exports = router;
