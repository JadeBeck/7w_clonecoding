const CartRepository = require('../repositories/cart.repository');

class CartService {
  cartRepository = new CartRepository();

  // 장바구니 생성
  createCt = async ( goodsId, userId, quantity ) => {
    const createCartData = await this.cartRepository.createCt(
      goodsId,
      userId,
      quantity,
    );
    return createCartData;
    // return {
    //   postId: createCartData.postId,
    //   nickname: createCartData.nickname,
    //   comment: createCartData.comment,
    //   createdAt: createCartData.createdAt,
    //   updatedAt: createCartData.updatedAt,
    // };
  };

  // 장바구니 조회
    findAllCart = async (userId) => {
        const allCart = await this.cartRepository.findAllCart(userId);
        if (allCart.length === 0) {
            throw new Error("장바구니가 비어있습니다.");
        } else {
            return allCart;
        }
            
    // return allCart.map((cart) => {
    //   return {
    //     commentId: cart.commentId,
    //     nickname: cart.nickname,
    //     comment: cart.comment,
    //     createdAt: cart.createdAt,
    //     updatedAt: cart.updatedAt,
    //   };
    // });
  };
    
    
  // 장바구니 수정
  updateCt = async (cartsId, userId, quantity) => {     
    const findCart = await this.cartRepository.findCartById(cartsId);
    if (!findCart) throw new Error("장바구니가 존재하지 않았습니다.");

    // if (userId === FindCmt.userId) {
      
    await this.cartRepository.updateCt(cartsId, userId, quantity);
    return '수정하였습니다.';
    // } else {
    //   throw new Error("수정 권한이 없습니다.");
    // }
  };

  // 장바구니 삭제
  deleteCt = async (cartsId, userId) => {
    const findCart = await this.cartRepository.findCartById(cartsId);
    if (!findCart) throw new Error("장바구니가 존재하지 않았습니다.");

      await this.cartRepository.deleteCt(cartsId, userId);
      return '삭제하였습니다.';
    
  };
}

module.exports = CartService;