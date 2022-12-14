const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

// 회원 가입 controller
router.post("/users/signup", userController.createUser);
// 아이디 중복확인 controller
router.post("/users/check", userController.checkID)
// 로그인 controller
router.post('/users/login', userController.loginUser);

module.exports = router;