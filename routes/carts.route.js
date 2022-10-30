const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middlewares');

const CartController = require('../controllers/cart.controller');
const cartController = new CartController();

// 장바구니 생성 
router.post("/carts/:goodsId", authMiddleware, cartController.createCart); 
// 장바구니 조회
router.get("/carts/list", authMiddleware, cartController.getCarts);
// 장바구니 수정
router.put("/carts/:cartsId", authMiddleware, cartController.updateCart); 
// 장바구니 삭제
router.delete("/carts/:cartsId", authMiddleware, cartController.deleteCart); 

module.exports = router;