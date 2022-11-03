const CartRepository = require('../repositories/cart.repository');
const GoodsRepository = require('../repositories/goods.repository');

class CartService {
  cartRepository = new CartRepository();
  GoodsRepository = new GoodsRepository();

    //기존에 담은 품목 여부 조회
    didIAlreadyPutThis = async (goodsId, userId) => {
        const didIAlreadyPutThis = await this.cartRepository.didIAlreadyPutThis( goodsId, userId);
        return didIAlreadyPutThis;
    }

    //기존에 담은 품목일 경우 수량만 플러스
    plusNumsOfGoods = async (goodsId, userId, quantity) => {
        const plusNumsOfGoods = await this.cartRepository.plusNumsOfGoods(goodsId, userId, quantity);
        return plusNumsOfGoods;
    }

  // 장바구니 생성
  createCt = async (goodsId, userId, quantity) => {
    const findGoods = await this.GoodsRepository.findGoodsById(goodsId);
    if (!findGoods) throw new Error("상품이 존재하지 않았습니다.");

    const createCartData = await this.cartRepository.createCt(goodsId, userId, quantity );
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
      return allCart;
        // if (allCart.length === 0) {
        //     throw new Error("장바구니가 비어있습니다.");
        // } else {
        //     return allCart;
        // }
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