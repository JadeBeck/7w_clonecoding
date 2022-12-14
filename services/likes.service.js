const LikesRepository = require('../repositories/likes.repository');

class LikesService {
    likesRepository = new LikesRepository();

    createLikes = async (userId, goodsId) => {
        
            const uselikes = await this.likesRepository.uselikes(userId, goodsId);
            if (!uselikes) {             //등록된 uesrId,goodsId가 있는지 확인
                await this.likesRepository.updateLikes(userId, goodsId);   //없으면
                throw { message: '좋아요를 등록하였습니다.'};
            } else {
                await this.likesRepository.deletelikes(userId, goodsId);   //있으면
                throw { message: '좋아요를 취소하였습니다.'};
            }
        
    };

    findLikeGoods = async (userId) => {
        const findLikeGoods = await this.likesRepository.findLikeGoods(userId);
        return findLikeGoods
    }
}

module.exports = LikesService;