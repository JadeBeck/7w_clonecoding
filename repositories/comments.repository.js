const {Comments} = require('../models/index');

class CommentsRepository {
    //댓글 전체 목록 보기
    findAllComments = async (goodsId) => {
        const allCommentsData = await Comments.findAll({
            where: {goodsId},
            order: [['createdAt', 'DESC']],
        });
        return allCommentsData;
    };

    //댓글 한개 보기
    findComment = async (userId, commentsId) => {
        const findCommentData = await Comments.findOne({
            where: {userId, commentsId}
        });
        return findCommentData;
    }

    //신규 댓글
    createComment = async(goodsId, userId, userName, commentImage, content) => {
        const createCommentData = await Comments.create({goodsId, userId, userName, commentImage, content});
        return createCommentData;
    };

    //댓글 수정
    updateComment = async(userId, commentsId, content) => {
        const updatedCommentData = await Comments.update({content}, {where: {userId, commentsId}});
        return updatedCommentData;
    };

    //댓글 삭제
    deleteComment = async(commentsId/*, userId*/) => {
        const deleteCommentData = await Comments.destroy({
            where: {commentsId/*, userId*/},
        });
        return deleteCommentData;
    };
}

module.exports = CommentsRepository;