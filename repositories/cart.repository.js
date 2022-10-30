const { Carts, Goods } = require('../models'); // DB영역에서는 꼭 필요한 존재.

class CartRepository {
  // 장바구니 생성
  createCt = async ( goodsId, userId, quantity ) => {
    const createCartData = await Carts.create({
      goodsId,
      userId,
      quantity,
    });
    // const createCartData = await Carts.findOne({
    //     where: { goodsId, userId, quantity }, 
    //     attributes: ['goodsId'], 
    //     include: {
    //       model: Goods,
    //       order: [['createdAt', 'DESC']], 
    //       attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight'],
    //     }
    //   });       
    return createCartData;
  };

  // 장바구니 조회
  findAllCart = async ( userId ) => {
    const allCart = await Carts.findAll({
      where: { userId },
      attributes: ['goodsId'], // 기준이 되는 아이
      include: {
        model: Goods,
        order: [['createdAt', 'DESC']], // carts의 createdAt 기준
        attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight'],
      }
    });
    return allCart;
  };    

//   myLikePosts = async (userId) => {
//     return await Likes.findAll({
//         where: { userId },
//         attributes: ['postId'],
//         include: {
//             model: Posts,
//             order: [['likes', 'desc']],
//             attributes: ['title', 'nickname', 'likes', 'createdAt'],
//         }, // 인클루드 시에는 벨류값으로 모델명 직접입력 인클루드한 posts를 좋아요 갯수로 내림차순
//     });
// };    
    
 
  // 장바구니 수정
  updateCt = async (cartsId, userId, quantity) => {
    const updateCartData = await Carts.update(
      { quantity },
      { where: { cartsId, userId } }
    );
    return updateCartData;
  };

  // 장바구니 삭제
  deleteCt = async (cartsId, userId) => {
    const deleteCartData = await Carts.destroy({
      where: { cartsId, userId },
    });
    return deleteCartData;
  };

  // 장바구니 찾기
  findCartById = async (cartsId) => {
    const findCart = await Carts.findOne({ where: { cartsId } });

    return findCart;
  };
}

module.exports = CartRepository;