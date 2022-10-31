const { Goods } = require('../models/index');

class GoodsRepository {
    // 상품 전체 조회
    findAllGoods = async () => {
        const goods = await Goods.findAll();

        return goods;
    };

    // 채소 상품 전체
    findVegeGoods = async() =>{
        const vegeGoods = await Goods.findAll({where : { category : "채소"}});
        return vegeGoods;
    };

    // 수산물 상품 전체
    findSeaGoods = async() =>{
        const seaGoods = await Goods.findAll({where : { category : "수산물"}});
        return seaGoods;
    };

    // 정육 상품 전체
    findMeatGoods = async() =>{
        const meatGoods = await Goods.findAll({where : { category : "정육"}});
        return meatGoods;
    };

    // 과일 상품 전체
    findFruitGoods = async() =>{
        const fruitGoods = await Goods.findAll({where : { category : "과일"}});
        return fruitGoods;
    };

    // 상품 상제 정보
    findGoodsById = async (goodsId) => {
        const good = await Goods.findOne({ where: { goodsId } });
        return good;
    };
    
    

}

module.exports = GoodsRepository;