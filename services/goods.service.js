
const GoodsRepository = require('../repositories/goods.repository');

class GoodsService {
    GoodsRepository = new GoodsRepository();
  
  // 난수 생성
  randomNum = async (min, max) => {
  const rannum = Math.floor(Math.random() * (max - min +1)) + min;

  return rannum;
}

  // 전체 상품 조회
  findAllGoods = async () => {
    const allGoods = await this.GoodsRepository.findAllGoods();

    allGoods.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return allGoods.map((goods) => {
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    });
  };

  // 카테고리별 상품 랜덤 20개 추출
  findSortGoods = async () => {
    const goodsSort = await this.GoodsRepository.findAllGoods();

    goodsSort.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return goodsSort.map((goods) => {
      for(let i= 0; i <20; i++){
        let a = this.randomNum(1, 60)
        if(a === goods.goodsId && goods.category === "야채"){
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    }else if(a === goods.goodsId && goods.category === "수산"){
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    }else if(a === goods.goodsId && goods.category === "정육"){
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    }else if(a === goods.goodsId && goods.category === "과일"){
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    }
    }
    });
  };

  // 전체 상품중 20개 랜덤 추출
  findRanGoods = async () => {
    const allGoods = await this.GoodsRepository.findAllGoods();

    allGoods.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return allGoods.map((goods) => {
      
        let a = this.randomNum(1, 10)
        if(a.length === 5){
          return
        }
        console.log(a)
        if(a === goods.goodsId){
      return {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        goodsImage: goods.goodsImage,
        category: goods.category,
        price: goods.price,
        delivery: goods.delivery,
        weight: goods.weight,
        from: goods.from,
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
    }
    
    });
  };

  // 상품 상세조회
  findGoodsById = async (goodsId) => {
    const findGoods = await this.GoodsRepository.findGoodsById(goodsId);
    return {
        goodsId: findGoods.goodsId,
        goodsName: findGoods.goodsName,
        goodsImage: findGoods.goodsImage,
        category: findGoods.category,
        price: findGoods.price,
        delivery: findGoods.delivery,
        weight: findGoods.weight,
        from: findGoods.from,
        createdAt: findGoods.createdAt,
        updatedAt: findGoods.updatedAt
    };
  };
  
  

}

module.exports = GoodsService;
