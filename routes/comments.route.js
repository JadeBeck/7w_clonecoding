const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/comments.controller');
const authAdminMiddleware = require('../middlewares/auth-middlewares');
const commentsController = new CommentsController();

router.get('/', commentsController.getComments);
router.post('/', commentsController.createComments);
router.put('/:commentsId', commentsController.updateComments);
router.delete('/:commentsId', commentsController.deleteComments);

module.exports = router;
