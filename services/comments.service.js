const CommentsRepository = require('../repositories/comments.repository');
const UserRepository = require('../repositories/user.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();
//댓글 전체 목록 보기
    findAllComments = async (goodsId) => {
        const findAllCommentResult = await this.commentsRepository.findAllComments(goodsId);
        const findAllCommentResultData = [];
        for (let i = 0; i < findAllCommentResult.length; i++) {
            const data =
                {
                    goodsId: findAllCommentResult[i].dataValues.goodsId,
                    commentsId: findAllCommentResult[i].dataValues.commentsId,
                    userId: findAllCommentResult[i].dataValues.userId,
                    userName: findAllCommentResult[i].dataValues.userName[0] + "*" + findAllCommentResult[i].dataValues.userName[2],
                    commentImage: findAllCommentResult[i].dataValues.commentImage,
                    content: findAllCommentResult[i].dataValues.content,
                    createdAt: findAllCommentResult[i].dataValues.createdAt,
                    updatedAt: findAllCommentResult[i].dataValues.updatedAt
                };
            findAllCommentResultData.push(data)
        }
        return findAllCommentResultData;
    };

//신규 댓글
    createComment = async (goodsId, userId, userName, img, content) => {
        const createCommentResult = await this.commentsRepository.createComment(goodsId, userId, userName, img, content);
        return createCommentResult;
    };

//본인의 댓글 맞는지 확인해보기
    whoMadeThisComment = async (commentsId) => {
        const writerOfComment = await this.commentsRepository.findWriterOfComment(commentsId);
        return writerOfComment;
    }

//댓글 수정
    updateComment = async (userId, commentsId, content) => {
        await this.commentsRepository.updateComment(userId, commentsId, content);
        const commentResult = await this.commentsRepository.findComment(userId, commentsId);
        return commentResult;
    };

//댓글 삭제
    deleteComment = async (userId, commentsId) => {
        const deletedCommentResult = await this.commentsRepository.deleteComment(userId, commentsId);
        // console.log(deletedCommentResult, "service")
        return deletedCommentResult;
    };
}

module.exports = CommentsService;