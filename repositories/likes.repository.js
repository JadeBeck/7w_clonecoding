const {Likes} = require('../models');


class LikesRepository {

//게시글 좋아요 누르기    
    uselikes = async (goodsId, userId) => {
        // try {
            const finduselikes = await Likes.findOne({where: {goodsId, userId}});
            return finduselikes;
        // } catch {
        //     const error = new Error(`서버 실행 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

    updateLikes = async (goodsId, userId) => {
        // try {
            const findlikes = await Goods.findOne({where: {goodsId, userId}});
            await Goods.increment({likes: 1}, {where: {goodsId}});
            await Likes.create({goodsId, userId});
            return findlikes;
        // } catch {
        //     const error = new Error(`좋아요 요청 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

    deletelikes = async (goodsId, userId) => {
        // try {
            const findlikes = await Posts.findOne({where: {goodsId, userId}});

            await Posts.decrement({likes: 1}, {where: {goodsId}});
            await Likes.destroy({where: {goodsId, userId}});
            return findlikes;
        // } catch {
        //     const error = new Error(`좋아요 취소 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };
}

module.exports = LikesRepository;