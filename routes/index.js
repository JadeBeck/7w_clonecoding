const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require("./user.route");
const Goods = require('../routes/goods.route');
const Carts = require('../routes/carts.route');
const Comments = require('./comments.route');
const Likes = require('../routes/likes.route');


// const commentsRouter = require('./comments.route');  //댓글

router.use(cookieParser());
router.use(express.json());


router.use(User);
router.use("/goods", Goods);
router.use(Carts);
router.use(Comments);
router.use(Likes);



module.exports = router;
