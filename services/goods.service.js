
const GoodsRepository = require('../repositories/goods.repository');

class GoodsService {
    GoodsRepository = new GoodsRepository();
  
  // 상품 조회
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
        createdAt: goods.createdAt,
        updatedAt: goods.updatedAt
      };
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
        createdAt: findGoods.createdAt,
        updatedAt: findGoods.updatedAt
    };
  };

  getLikeGoods = async ({ id }) => {
    const getLikeGoodsAll = await this.GoodsRepository.getLikeGoods({ id})
   
    if (getLikeGoodsAll) {
        getLikeGoodsAll.sort((a, b) => {
            return b.totalLike - a.totalLike;
        })

        return getLikeGoodsAll.map((goods) => {
            return {
                goodsId: goods.goodsId,
                goodsName: goods.goodsName,
                goodsImage: goods.goodsImage,
                category: goods.category,
                price: goods.price,
                createdAt: goods.createdAt,
                updatedAt: goods.updatedAt
            }
        })   
    } else {
        throw new Error ('좋아요를 누른 게시글이 존재 하지않습니다.')
    }
    
}
putLike = async({goodsId, id}) => {

    const likeLog = await this.GoodsRepository.findLikeLog({goodsId, id});

    if (!likeLog) {

        await this.GoodsRepository.increaseLike({postId, id});
        return {"increase" :true, message: "해당 게시글에 좋아요를 눌렀습니다."}
        
    } else if (likeLog) {

        await this.GoodsRepository.decreaseLike({postId, id});
        return {"decrease": true, message: "해당 게시글에 좋아요를 취소하였습니다."}
        
    } else {
        throw new Error ("좋아요 반영에 실패하였습니다.")
    }
}
   
    



}

module.exports = GoodsService;
