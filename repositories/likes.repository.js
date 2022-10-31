const {Likes} = require('../models');
const {Goods} = require('../models');

class LikesRepository {

//게시글 좋아요 누르기    
    uselikes = async (userId, goodsId) => {
        try {
            const finduselikes = await Likes.findOne({where: {userId, goodsId}});
            return finduselikes;
        } catch {
            const error = new Error(`서버 실행 중 오류가 발생했습니다.`);
            error.statusCode = 500;
            throw error;
        }
    };

    // 찜 등록 저장
    updateLikes = async (userId, goodsId) => {
        try {
            const createlikes = await Likes.create({userId, goodsId});
            return createlikes;
        } catch {
            const error = new Error(`존재하는 상품이 아닙니다.`);
            error.statusCode = 500;
            throw error;
        }
    };

    //찜 취소
    deletelikes = async (userId, goodsId) => {
        try {
            const deletelikes = await Likes.destroy({where: {userId, goodsId}});
            return deletelikes;
        } catch {
            const error = new Error(`찜 등록 취소 중 오류가 발생했습니다.`);
            error.statusCode = 500;
            throw error;
        }
    };

    // 찜 목록 조회
    findLikeGoods = async (userId) => {
        const likegoods = await Likes.findAll({
            where: { userId },
            include: {
              model: Goods,
              key : 'goodsId',
              attributes: ['goodsName', 'goodsImage', 'price'],}    //goods랑 연결해서 필요한 부분만 빼오기
            
          });
          return likegoods;
    };
}

module.exports = LikesRepository;