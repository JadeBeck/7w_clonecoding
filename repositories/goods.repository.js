const { Goods } = require('../models/index');
const { Likes } = require('../models/index');

class GoodsRepository {
    // 상품 전체 조회 (날짜 내림차순)
    findAllGoods = async () => {
        const goods = await Goods.findAll({
            // where:{goodsId},
            order:[['createdAt','DESC']],
    });

        return goods;
    };

    // 상품 상제 정보
    findGoodsById = async (goodsId) => {
        console.log(goodsId);
        const good = await Goods.findOne({where: {goodsId}});
        console.log(good)
        return good;
    };


}

module.exports = GoodsRepository;
