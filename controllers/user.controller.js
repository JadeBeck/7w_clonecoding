const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
    loginId: Joi.string().alphanum().min(6).max(12).required(),
    userName: Joi.string().min(1).max(6).required(),
    password: Joi.string().min(6).max(12).required(),
    confirmPassword: Joi.ref('password'),
    address: Joi.string().required()
});

class UserController {
    userService = new UserService();

    //중복 아이디 
    checkID = async (req, res) => {
        try {
            const {loginId} = req.body;
            await this.userService.checkID(loginId); //service의 checkId 함수를 실행
            return res.status(200).json({message: "사용 가능한 아이디입니다."});  //함수 종료 후, 다음 코드 실행.
        } catch(f){
            return res.status(400).json({message: f.message});  //중복된 아이디입니다  (service에서 에러에 걸려서 여기로 돌아와서 뱉음)
        }
    };


    // 회원가입
    createUser = async (req, res) => {
        try {
        const {loginId, userName, password, confirmPassword, address} = req.body;
        await schema.validateAsync(req.body);  //joi로 유효성검사
        await this.userService.createUser(loginId, userName, password, address); //db에 저장되는 값들
        res.status(201).json({message: "회원가입 완료!"});
        } catch (f) {
            return res.status(400).json({message: f.message});  //아이디 중복확인(버튼)을 해주세요
        }
    };

    //로그인
    loginUser = async (req, res) => {
        try {

            const {loginId, password} = req.body;
            const userData = await this.userService.loginUser(loginId, password);
            //const payload = JSON.parse(atob(userData.token.split('.')[1]));
          

            res.status(200).json({data: userData, message: "로그인 완료!"})
        } catch (e) {
            res.status(400).json({message: e.message})
        }

    };

};

module.exports = UserController;