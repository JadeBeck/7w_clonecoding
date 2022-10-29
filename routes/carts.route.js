const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middlewares');

const CartController = require('../controllers/cart.controller');
const cartController = new CartController();

// 장바구니 생성 
router.post("/carts/:goodsId", cartController.createCart); 
// 장바구니 조회
router.get("/carts/list", cartController.getCarts);
// 장바구니 수정
router.put("/carts/:cartsId", cartController.updateCart); 
// 장바구니 삭제
router.delete("/carts/:cartsId", cartController.deleteCart); 

module.exports = router;