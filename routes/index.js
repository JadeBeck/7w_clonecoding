const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');
const Goods = require('./goods.route');
const Carts = require('./carts.route');
const Comments = require('./comments.route');
const Likes = require('./likes.route');


// const commentsRouter = require('./comments.route');  //댓글

router.use(cookieParser());
router.use(express.json());


router.use(User);
router.use(Goods);
router.use(Carts);
router.use(Comments);
router.use(Likes);



module.exports = router;
