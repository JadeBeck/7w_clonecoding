const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
    loginId: Joi.string().alphanum().min(6).max(12),
    userName: Joi.string().min(1).max(6),
    password: Joi.string().min(6).max(12).disallow('loginId'),
    confirmPassword: Joi.ref('password'),
    address: Joi.string()
});

class UserController {
    userService = new UserService();


    //중복 아이디 
    checkID = async (req, res) => {
        try {
            const {loginId} = req.body;
            await this.userService.checkID(loginId); 

            return res.status(200).json({message: "사용 가능한 아이디입니다."});

        } catch(f){
            return res.status(400).json({message: f.message});
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
            return res.status(401).json({message: f.message});
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
            res.status(401).json({message: e.message})
        }

    };

};

module.exports = UserController;