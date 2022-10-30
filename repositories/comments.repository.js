const {Comments} = require('../models/index');

class CommentsRepository {
    //댓글 전체 목록 보기
    findAllComments = async (goodsId) => {
        const allCommentsData = await Comments.findAll({where: {goodsId}, order: [['createdAt', 'DESC']]});
        return allCommentsData;
    };

    //댓글 한개 보기
    findComment = async (userId, commentsId) => {
        const findCommentData = await Comments.findOne({where: {userId, commentsId}});
        return findCommentData;
    }

    //신규 댓글
    createComment = async(goodsId, userId, userName, img, content) => {
        const createCommentData = await Comments.create({goodsId, userId, userName, commentImage: img, content});
        return createCommentData;
    };

    //댓글 수정
    updateComment = async(userId, commentsId, content) => {
        const updatedCommentData = await Comments.update({content}, {where: {userId, commentsId}});
        return updatedCommentData;
    };

    //댓글 삭제
    deleteComment = async(userId, commentsId) => {
        const deleteCommentData = await Comments.destroy({where: {userId, commentsId},});
        // console.log(deleteCommentData)
        // console.log(commentsId, "commentsId")
        // console.log(userId)
        return deleteCommentData;
    };
}

module.exports = CommentsRepository;