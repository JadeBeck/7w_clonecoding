const {Likes} = require('../models');
const {Goods} = require('../models');

class LikesRepository {

//게시글 좋아요 누르기    
    uselikes = async (userId, goodsId) => {
        // try {
            const finduselikes = await Likes.findOne({where: {userId, goodsId}});
            return finduselikes;
        // } catch {
        //     const error = new Error(`서버 실행 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

    updateLikes = async (userId, goodsId) => {
        // try {}
            const createlikes = await Likes.create({userId, goodsId});
            return createlikes;
        // } catch {
        //     const error = new Error(`좋아요 요청 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

    deletelikes = async (userId, goodsId) => {
        // try {}
            const deletelikes = await Likes.destroy({where: {userId, goodsId}});
            return deletelikes;
        // } catch {
        //     const error = new Error(`좋아요 취소 중 오류가 발생했습니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

    // 찜 목록 조회
    findLikeGoods = async (userId) => {
        const likegoods = await Likes.findAll({
            where: { userId },
            include: {
              model: Goods,
              key : 'goodsId',
              attributes: ['goodsName', 'goodsImage', 'price'],}    
            
          });
          return likegoods;
    };
}

module.exports = LikesRepository;