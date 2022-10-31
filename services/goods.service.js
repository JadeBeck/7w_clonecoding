const { array } = require('joi');
const shuffle_array = require('shuffle-array');
const GoodsRepository = require('../repositories/goods.repository');

class GoodsService {
    GoodsRepository = new GoodsRepository();
  



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

  // 채소 상품 랜덤 추출
  findVegeGoods = async () => {
    const vegeGoods = await this.GoodsRepository.findVegeGoods();
    let result = new Array();

    for (let i = 0; i < vegeGoods.length; i++){
      result.push(vegeGoods[i])
    }
    shuffle_array(result);
    let slicedResult = result.slice(0, 8);
    console.log(slicedResult)

    return slicedResult
    
  };

    // 수산물 상품 랜덤 추출
    findSeaGoods = async () => {
      const seaGoods = await this.GoodsRepository.findSeaGoods();
      let result = new Array();

      for (let i = 0; i < seaGoods.length; i++){
        result.push(seaGoods[i])
      }
      shuffle_array(result);
      let slicedResult = result.slice(0, 8);
      console.log(slicedResult)
  
      return slicedResult
      
    };

       // 정육 상품 랜덤 추출
       findMeatGoods = async () => {
        const meatGoods = await this.GoodsRepository.findMeatGoods();
        let result = new Array();

        for (let i = 0; i < meatGoods.length; i++){
          result.push(meatGoods[i])
        }
        shuffle_array(result);
        let slicedResult = result.slice(0, 8);
        console.log(slicedResult)
    
        return slicedResult
        
      };

        // 과일 상품 랜덤 추출
        findFruitGoods = async () => {
          const fruitGoods = await this.GoodsRepository.findFruitGoods();
          let result = new Array();

          for (let i = 0; i < fruitGoods.length; i++){
            result.push(fruitGoods[i])
          }
          shuffle_array(result);
          let slicedResult = result.slice(0, 8);
          console.log(slicedResult)
      
          return slicedResult
          
        };
  // 전체 상품 랜덤 추출
  findRanGoods = async () => {
    const ranGoods = await this.GoodsRepository.findAllGoods();
    let result = new Array();

    for (let i = 0; i < ranGoods.length; i++){
      result.push(ranGoods[i])
    }
    shuffle_array(result);
    let slicedResult = result.slice(0, 8);
    console.log(slicedResult)

    return slicedResult


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