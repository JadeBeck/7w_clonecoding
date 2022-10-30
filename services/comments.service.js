const CommentsRepository = require('../repositories/comments.repository');
const UserRepository = require('../repositories/user.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();
    //댓글 목록 보기
    findAllComments = async (goodsId, userName) => {
        const findAllCommentResult = await this.commentsRepository.findAllComments(goodsId);
        return findAllCommentResult
    };

    //신규 댓글
    createComment = async (goodsId, userId, userName, img, content) => {
        const createCommentResult = await this.commentsRepository.createComment(goodsId, userId, userName, img, content);
        return createCommentResult;
    };

    //댓글 수정
    updateComment = async (userId, commentsId, content) => {
        if (content === "") {
            throw new Error("댓글 내용을 입력해주세요!");
        }
        await this.commentsRepository.updateComment(userId, commentsId, content);
        const commentResult = await this.commentsRepository.findComment(userId, commentsId);
        return commentResult;
    };

    //댓글 삭제
    deleteComment = async (commentsId/*, userId*/) => {
        const deletedCommentResult = await this.commentsRepository.deleteComment(commentsId/*, userId*/);
        return deletedCommentResult;
    };
}

module.exports = CommentsService;