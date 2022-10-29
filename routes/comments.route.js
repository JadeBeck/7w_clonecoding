const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth-middlewares');
const commentsController = new CommentsController();

// router.get('/', commentsController.getComments);
// router.post('/', authMiddleware, commentsController.createComments);
// router.put('/:commentsId', authMiddleware, commentsController.updateComments);
// router.delete('/:commentsId', authMiddleware, commentsController.deleteComments);

module.exports = router;
