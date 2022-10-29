const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth-middlewares');
const commentsController = new CommentsController();

router.get('/comments/:goodsId', commentsController.getComments);
router.post('/comments/:goodsId', /*authMiddleware,*/ commentsController.createComment);
// router.put('/:commentsId', authMiddleware, commentsController.updateComments);
// router.delete('/:commentsId', authMiddleware, commentsController.deleteComments);

module.exports = router;
