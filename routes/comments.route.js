// const express = require('express');
// const router = express.Router();
// const CommentsController = require('../controllers/comments.controller');
// const authMiddleware = require('../middlewares/auth-middlewares');
// const commentsController = new CommentsController();

<<<<<<< HEAD
// // router.get('/', commentsController.getComments);
// // router.post('/', authMiddleware, commentsController.createComments);
// // router.put('/:commentsId', authMiddleware, commentsController.updateComments);
// // router.delete('/:commentsId', authMiddleware, commentsController.deleteComments);
=======
router.get('/comments/:goodsId', commentsController.getComments);
router.post('/comments/:goodsId', /*authMiddleware,*/ commentsController.createComment);
// router.put('/:commentsId', authMiddleware, commentsController.updateComments);
// router.delete('/:commentsId', authMiddleware, commentsController.deleteComments);
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f

// module.exports = router;
