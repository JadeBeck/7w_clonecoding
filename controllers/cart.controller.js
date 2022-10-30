const CartService = require('../services/cart.service');


class CartController {
  cartService = new CartService();

  // 장바구니 생성
  createCart = async (req, res, next) => {
    const { goodsId } = req.params;
    const { userId } = res.locals.user;
    const { quantity } = req.body;
       
    try { 
      const createCartData = await this.cartService.createCt(
        goodsId, 
        userId,
        quantity,
      );
      res.status(201).json({ message: "장바구니에 담았습니다.", data: createCartData });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

   // 장바구니 조회
   getCarts = async (req, res, next) => {
    const { userId } = res.locals.user;
    
    try {
      const cartsListUp = await this.cartService.findAllCart(userId);
      res.status(200).json({ data: cartsListUp });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };   
    
  // 장바구니 수정
  updateCart = async (req, res, next) => {
    const { cartsId } = req.params;
    const { userId } = res.locals.user;
    const { quantity } = req.body;

    try {
      const updateCartDate = await this.cartService.updateCt(
        cartsId,
        userId,
        quantity,
      );
      res.status(201).json({ message: "수정하였습니다.", data: updateCartDate });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };

  // 장바구니 삭제
  deleteCart = async (req, res, next) => {
    const { cartsId } = req.params;
    const userId = res.locals.user.userId;

    try {
      const deleteCartDate = await this.cartService.deleteCt(
        cartsId,
        userId
      );
      res.status(200).json({ message: deleteCartDate });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };
}

module.exports = CartController;