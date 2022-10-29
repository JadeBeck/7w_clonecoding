const { Carts } = require('../models'); // DB영역에서는 꼭 필요한 존재.

class CartRepository {
  // 장바구니 생성
  createCt = async ( comment, postId, id, nickname ) => {
    const createCartData = await Carts.create({
      comment,
      postId,
      id,
      nickname,
    });
    return createCartData;
  };

  // 장바구니 조회
  findAllCart = async ( postId ) => {
    const allCart = await Carts.findAll({
      where: { postId },
      attributes: { exclude: ['postId'] },
      order: [['createdAt', 'DESC']],
    });
    return allCart;
  };    
    
  // 장바구니 수정
  updateCt = async (comment, commentId, id) => {
    const updateCartData = await Carts.update(
      { comment },
      { where: { commentId, id } }
    );
    return updateCartData;
  };

  // 장바구니 삭제
  deleteCt = async (cartsId, id) => {
    const deleteCartData = await Carts.destroy({
      where: { cartsId, id },
    });
    return deleteCartData;
  };

  // 장바구니 찾기
  findCartById = async (cartId) => {
    const findCart = await Carts.findOne({ where: { cartId } });

    return findCart;
  };
}

module.exports = CartRepository;