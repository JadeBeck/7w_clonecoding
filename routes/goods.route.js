const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middlewares");
const GoodsController = require("../controllers/goods.controller");
const goodsController = new GoodsController();


// router.post('/', upload.single('post'), postsController.createPost)

router.get("/all", goodsController.getAllGoods); //전체 상품중 20개 랜덤
router.get("/vege", goodsController.getVegeGoods); // 야채랜덤상품
router.get("/sea", goodsController.getSeaGoods); // 수산물랜덤상품
router.get("/meat", goodsController.getMeatGoods); // 정육랜덤상품
router.get("/fruit", goodsController.getFruitGoods); // 과일랜덤상품
router.get("/:goodsId", goodsController.getGoodsById); // 제품 상세 페이지
router.get("/newist", goodsController.getGoods) // 등록 날짜 내림차순 전체상품


module.exports = router;
