const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth-middlewares');
const multerMiddleware = require('../middlewares/multer-middlewares')
const commentsController = new CommentsController();

router.get('/comments/:goodsId', commentsController.getComments);
router.post('/comments/:goodsId', /*authMiddleware,*/ multerMiddleware, commentsController.createComment);
router.put('/comments/:commentsId', /*authMiddleware, */commentsController.updateComment);
router.delete('/comments/:commentsId', /*authMiddleware, */commentsController.deleteComment);

module.exports = router;
