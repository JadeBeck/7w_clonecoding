const { array } = require('joi');
const shuffle_array = require('shuffle-array');
const GoodsRepository = require('../repositories/goods.repository');

class GoodsService {
    GoodsRepository = new GoodsRepository();
  
  // 난수 생성
  randomNum = (min, max) => {
  const rannum = Math.floor(Math.random() * (max - min +1)) + min;

  return rannum;
}


  // 전체 상품 조회
  findAllGoods = async () => {
    const allGoods = await this.GoodsRepository.findAllGoods();
    console.log(allGoods)

    allGoods.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });

    return allGoods.map((goods) => {
      console.log(goods.goodsId)
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

  // 야채 상품 랜덤 추출
  findVegeGoods = async () => {
    const vegeGoods = await this.GoodsRepository.findVegeGoods();
    const result = []
    
      for(let i= 0; i <2; i++){
      let a = this.randomNum(0, 2)
      console.log(a)
       let goods = vegeGoods[a]
       result.push(goods)
    }
    console.log(result)
    return result
    
  };

    // 수산물 상품 랜덤 추출
    findSeaGoods = async () => {
      const seaGoods = await this.GoodsRepository.findSeaGoods();
      const result = []
      
        for(let i= 0; i <2; i++){
        let a = this.randomNum(0, 2)
        console.log(a)
         let goods = seaGoods[a]
         result.push(goods)
      }
      console.log(result)
      return result
      
    };

       // 정육 상품 랜덤 추출
       findMeatGoods = async () => {
        const meatGoods = await this.GoodsRepository.findMeatGoods();
        const result = []
        
          for(let i= 0; i <2; i++){
          let a = this.randomNum(0, 2)
          console.log(a)
           let goods = meatGoods[a]
           result.push(goods)
        }
        console.log(result)
        return result
        
      };

        // 과일 상품 랜덤 추출
        findFruitGoods = async () => {
          const fruitGoods = await this.GoodsRepository.findFruitGoods();
          const result = []
          
            for(let i= 0; i <2; i++){
            let a = this.randomNum(0, 2)
            console.log(a)
             let goods = fruitGoods[a]
             result.push(goods)
          }
          console.log(result)
          return result
          
        };
  // 전체 상품 랜덤 추출
  findRanGoods = async () => {
    const ranGoods = await this.GoodsRepository.findAllGoods();
    let result = new Array();

    for (let i = 0; i < ranGoods.length; i++){
      result.push(ranGoods[i])
    }
    shuffle_array(result);
    let slicedResult = result.slice(0, 5);
    console.log(slicedResult)

    return slicedResult
  
    
  

    // for(let i=1; i<=5; i++){
    // let a = this.randomNum(1, 12)
    //   let goods = ranGoods[a]   
    //   result.push(goods)
      
    // }
    // return result

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