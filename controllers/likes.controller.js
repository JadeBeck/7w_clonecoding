const LikesService = require('../services/likes.service'); 

class LikesController {
  likesService = new LikesService(); 

//게시글 좋아요 누르기

createLikes = async (req, res, next) => {
  try{
      const { goodsId } = req.params;
      const { userId } = res.locals.user;
      await this.likesService.createLikes(userId, goodsId);
      res.status(201).json({ message });    //service에 적은 좋아요 등록메세지
  }catch(cancel){  //catch 옆에 ()에 변수를 담아줘야한다고 한다.
      return res.status(201).json({message: cancel.message});  //service에 적은 취소 등록메세지
  } 
}

}

module.exports = LikesController;