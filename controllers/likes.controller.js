const LikesService = require('../services/likes.service'); 

class LikesController {
  likesService = new LikesService(); 


//찜 등록 &취소     PUT) localhost:3000/goods/:goodsId/like
createLikes = async (req, res, next) => {

  try{
      const { goodsId } = req.params;
      const { userId } = res.locals.user;
      await this.likesService.createLikes(userId, goodsId);
      res.status(201).json({ message });    //service에 적은 찜 완료! 메세지
  }catch(deletelikes){      //에러부분이 아니라 service의 false값이(찜 취소) 담겨져 옴. 변수라 ()안에 뭐가 들어가도 상관없음.
      return res.status(201).json({message: deletelikes.message});  //service에 적은 취소 등록메세지
  } 
};


// 특정 userId의 좋아요목록    GET) localhost:3000/like
getLikeGoods = async (req, res) =>{
  const { userId } = res.locals.user;
  try {
    const goodsList = await this.likesService.findLikeGoods(userId);
    res.status(200).json({data: goodsList})
  }catch(error){
    res.status(400).json({error : error.message})
  }
};

};

module.exports = LikesController;