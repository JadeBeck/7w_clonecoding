const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middlewares");
const GoodsController = require("../controllers/goods.controller");
const goodsController = new GoodsController();


// router.post('/', upload.single('post'), postsController.createPost)

router.get("/all", goodsController.getAllGoods); //전체 상품중 20개 랜덤
router.get("/md", goodsController.getSortGoods); // 카테고리별 상품 20개 랜덤
router.get("/:goodsId", goodsController.getGoodsById); // 제품 상세 페이지
router.get("/newist", goodsController.getGoods) // 등록 날짜 내림차순 전체상품


module.exports = router;
