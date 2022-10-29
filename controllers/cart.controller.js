const CartService = require('../services/cart.service');


class CartController {
  cartService = new CartService();

  // 장바구니 생성
  createCart = async (req, res, next) => {
    const { goodsId } = req.params;
    const { id } = res.locals.user;
       
    try {
      const { comment } = await commentSchema.validateAsync(req.body);
      
      const createCartData = await this.cartService.createCt(
        comment, 
        postId,
        id,
        nickname,
      );
      res.status(201).json({ data: createCartData });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

   // 장바구니 조회
   getCarts = async (req, res, next) => {
    const { cartId } = req.params;
    
    try {
      const cartsListUp = await this.cartService.findAllCart(cartId);
      res.status(200).json({ data: cartsListUp });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };   
    
  // 장바구니 수정
  updateCart = async (req, res, next) => {
    const { commentId } = req.params;
    const id = res.locals.user.id;

    try {
      const { comment } = await commentSchema.validateAsync(req.body);  
      const updateCartDate = await this.cartService.updateCt(
        comment,
        commentId,
        id
      );
      res.status(201).json({ message: updateCartDate });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };

  // 장바구니 삭제
  deleteCart = async (req, res, next) => {
    const { cartsId } = req.params;
    const id = res.locals.user.id;

    try {
      const deleteCartDate = await this.cartService.deleteCt(
        cartsId,
        id
      );
      res.status(200).json({ message: deleteCartDate });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };
}

module.exports = CartController;