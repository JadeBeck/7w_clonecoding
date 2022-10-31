const LikesService = require('../services/likes.service'); 

class LikesController {
  likesService = new LikesService(); 

//게시글 좋아요 누르기

createLikes = async (req, res, next) => {
//   try{
      const { goodsId } = req.params;
      const { userId } = res.locals.user;
      const updatelikes = await this.likesService.createLikes(goodsId, userId);
      res.status(200).json({ message: updatelikes}); 
//   }catch(err){
    //   return res.status(err.statusCode || 500).json({message: err.message});
//   } 
}
}
module.exports = LikesController;