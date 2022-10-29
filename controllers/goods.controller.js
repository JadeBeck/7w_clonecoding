
const GoodsService = require('../services/goods.service');

class GoodsController {
    GoodsService = new GoodsService();

  // 상품 전체 조회
  getGoods = async (req, res) => {
    
    try{
      const goods = await this.GoodsService.findAllGoods();
      res.status(200).json({ data: goods });
    }catch (error){
      res.status(404).json({error: error.message})
    }
  };

  // 전체 상품 랜덤 조회
  getAllGoods = async (req, res) => {
    
    try{
      const ranGoods = await this.GoodsService.findRanGoods();
      res.status(200).json({ data: ranGoods });
    }catch (error){
      res.status(404).json({error: error.message})
    }
  };

  // 특정 카테고리 상품 조회
  getSortGoods = async (req, res) => {
    
    try{
      const sortGoods = await this.GoodsService.findSortGoods();
      res.status(200).json({ data: sortGoods });
    }catch (error){
      res.status(404).json({error: error.message})
    }
  };

  // 상품 상세조회
  getGoodsById = async (req, res) => {
    const { goodsId } = req.params;
    
    const good = await this.GoodsService.findGoodsById(goodsId);
    res.status(200).json({ data: good });

    // try{
    // const good = await this.GoodsService.findGoodsById(goodsId);
    // res.status(200).json({ data: good });
    // }catch (error){
    //   res.status(404).json({error: error.message})
    // }
  };
}

module.exports = GoodsController;
