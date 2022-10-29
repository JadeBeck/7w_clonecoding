const { Goods } = require('../models/index');
const { Likes } = require('../models/index');

class GoodsRepository {
    // 상품 전체 조회
    findAllGoods = async () => {
        const goods = await Goods.findAll();

        return goods;
    };

    // 상품 상제 정보
    findGoodsById = async (goodsId) => {
        const good = await Goods.findOne({ where: { goodsId } });
        return good;
    };

    getLikeGoods = async ({ id }) => {
        const getLikeAll = await Likes.findAll({
            where: { id },
            attributes: ['goodsId'],
        });

        const likeGoodsId = getLikeAll.map((good) => {
            return good.getDataValue('goodsId');
        });


        const getLikeGoodsAll = await Goods.findAll({
            where: { postId: likeGoodsId },
        });

        return getLikeGoodsAll;
    };

    findLikeLog = async ({ goodsId, id }) => {
        const userLikeGoods = await Likes.findOne({ where: { goodsId, id } });

        return userLikeGoods;
    };

    increaseLike = async ({ goodsId, id }) => {
        await Likes.create({ goodsId, id });
        await Goods.increment({ totalLike: 1 }, { where: { goodsId } });

        return {};
    };

    decreaseLike = async ({ goodsId, id }) => {
        await Likes.destroy({ where: { goodsId, id } });
        await Goods.decrement({ totalLike: 1 }, { where: { goodsId } });

        return {};
    };

}

module.exports = GoodsRepository;