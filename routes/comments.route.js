const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth-middlewares');
const upload = require('../middlewares/upload-image')
const commentsController = new CommentsController();

router.get('/comments/:goodsId', commentsController.getComments);
router.post('/comments/:goodsId', authMiddleware, upload.single('img'), commentsController.createComment);
router.put('/comments/:commentsId', authMiddleware, commentsController.updateComment);
router.delete('/comments/:commentsId', authMiddleware, commentsController.deleteComment);

module.exports = router;
