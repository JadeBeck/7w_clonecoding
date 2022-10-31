const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middlewares');
const LikesController = require('../controllers/likes.controller');
const likesController = new LikesController();

router.put('/goods/:goodsId/like', authMiddleware, likesController.createLikes);
// router.get('/goods/like', authMiddleware, likesController.getLikes);

module.exports = router;