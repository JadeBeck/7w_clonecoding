const LikesRepository = require('../repositories/likes.repository');

class LikesService {
    likesRepository = new LikesRepository();

    createLikes = async (userId, goodsId) => {
        // try {
            const uselikes = await this.likesRepository.uselikes(userId, goodsId);
            if (!uselikes) {
                await this.likesRepository.updateLikes(userId, goodsId);
                throw { message: '좋아요를 등록하였습니다.'};
            } else {
                await this.likesRepository.deletelikes(userId, goodsId);
                throw { message: '좋아요를 취소하였습니다.'};
            }
        // } catch {
        //     const error = new Error(`잘못된 정보 입니다.`);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };
}

module.exports = LikesService;