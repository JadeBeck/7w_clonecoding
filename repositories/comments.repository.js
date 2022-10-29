<<<<<<< HEAD
// const { Comments } = require('../models/comments');

// class CommentsRepository {
=======
const {Comments} = require('../models/index');

class CommentsRepository {
    //댓글 목록 보기
    findAllComments = async (goodsId) => {
        const allCommentsData = await Comments.findAll({
            where: {goodsId},
            order: [['createdAt', 'DESC']],
        });
        return allCommentsData;
    };
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f

    //신규 댓글
    createComment = async(goodsId, id, userName, commentImage, content) => {
        const createCommentData = await Comments.create({goodsId, id, userName, commentImage, content});
        return createCommentData;
    };

<<<<<<< HEAD
// }
=======
    //댓글 수정
    updateComment = async(commentId, content) => {
        const updatedCommentData = await Comments.update({content}, {where: {commentId}});
        return updatedCommentData;
    };

    //댓글 삭제
    deleteComment = async(commentId, userId) => {
        const commentData = await Comments.findByPk(commentId, userId);
    };
}
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f

// module.exports = CommentsRepository;
