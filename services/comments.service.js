const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();
    //댓글 목록 보기
    findAllComments = async (goodsId) => {
        const findAllCommentData = await this.commentsRepository.findAllComments(goodsId);
        return {
            goodsId: findAllCommentData.goodsId,
            commentId: findAllCommentData.commentId,
            userName: findAllCommentData.userName,
            content: findAllCommentData.content,
            commentImage: findAllCommentData.commentImage,
            createdAt: findAllCommentData.createdAt,
            updatedAt: findAllCommentData.updatedAt,
        };
    };

    //신규 댓글
    createComment = async (goodsId, id, userName, commentImage, content) => {
        const createCommentData = await this.commentsRepository.createComment(goodsId, id, userName, commentImage, content);
        return {
            goodsId: createCommentData.goodsId,
            commentId: createCommentData.commentId,
            userName: createCommentData.userName,
            content: createCommentData.content,
            commentImage: createCommentData.commentImage,
            createdAt: createCommentData.createdAt,
            updatedAt: createCommentData.updatedAt,
        };
    };

    //댓글 수정
    updateComment = async (commentId, content) => {
        if (content === "") {
            throw new Error("댓글 내용을 입력해주세요!");
        }
        const commentUpdateResult = await this.commentsRepository.updateComment(commentId, content);

        const commentResult = await this.commentsRepository.getComment(commentId);
        return {
            commentId: commentResult.commentId,
            userId: commentResult.userId,
            content: commentResult.content,
            createdAt: commentResult.createdAt,
            updatedAt: commentResult.updatedAt,
        };
    };

    //댓글 삭제
    deleteComment = async(commentId, userId) => {
        const deletedCommentData = await this.commentsRepository.deleteComment(commentId, userId);
        return deletedCommentData;
    };

}

module.exports = CommentsService;