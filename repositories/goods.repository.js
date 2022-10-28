const { Goods } = require('../models');
const { Users } = require('../models');


class GoodRepository {
    // 상품 전체 조회
    findAllGoods = async () => {
        const goods = await Goods.findAll();

        return goods;
    };

    // 게시글 상제 정보
    findGoodsById = async (goodsId) => {
        const good = await Goods.findOne({ where: { goodsId } });
        return good;
    };

}

module.exports = GoodRepository;
