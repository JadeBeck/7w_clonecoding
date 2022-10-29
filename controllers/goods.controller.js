
const GoodsService = require('../services/goods.service');

class GoodsController {
    GoodsService = new GoodsService();

  // 게시글 전체 조회
  getGoods = async (req, res) => {
    
    try{
      const goods = await this.GoodsService.findAllPost();
      res.status(200).json({ data: goods });
    }catch (error){
      res.status(404).json({error: error.message})
    }
  };

  // 게시글 상세조회
  getGoodsById = async (req, res) => {
    const { goodsId } = req.params;
    
    try{
    const good = await this.GoodsService.getGoodsById(goodsId);
    res.status(200).json({ data: good });
    }catch (error){
      res.status(404).json({error: error.message})
    }

    // 찜 목록 
    getLikeGoods = async (req, res, next) => {
        const { id } = res.locals.user;
        try{
            const getLikeGoodsAll = await this.GoodsService.getLikeGoods({id})
            res.status(200).json({data: getLikeGoodsAll})
        } catch(err) {
            res.status(404).json({error: err.message})
        }
    }
    
    // 찜 하기
    putLike = async (req, res, next) => {
        const { goodsId } = req.params;
        const { id } = res.locals.user;
    
        try{
            const LikeGoods = await this.goodsService.putLike({goodsId, id})
            res.status(200).json(LikeGoods)
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
    
  };
  
  

}

module.exports = GoodsController;
