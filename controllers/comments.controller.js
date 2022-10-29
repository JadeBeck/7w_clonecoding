const CommentsService = require('../services/comments.service');

class CommentsController {
    commentsService = new CommentsService();
    //댓글 목록 보기
    getComments = async (req, res, next) => {
        try {
            const comments = await this.commentsService.findAllComments();
            res.status(200).json({message: comments});

        } catch (err) {

        }}



}

module.exports = CommentsController;