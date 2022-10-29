const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
    userId        : Joi.string().alphanum().min(6).max(12),
    userName       : Joi.string().min(1).max(6),
    password       : Joi.string().min(6).max(12).disallow('userId'),
    confirmPassword: Joi.ref('password')
    // address       : Joi.string().required(),
});

class UserController {
    userService = new UserService();

    // 회원 가입.
    createUser = async (req, res) => {


        try {
            const {loginId,userName,password,confirmPassword} = req.body;
            await schema.validateAsync(req.body);
            await this.userService.createUser(loginId,userName,password,confirmPassword);

            res.status(201).json({message: "회원가입 완료!"});  

        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({message: '양식에 맞게 입력해주세요.'});
        }
    };

    //로그인
    loginUser = async (req, res) => {   
        try {
            const {loginId, password} = req.body;
         
        // UserService 에서 검증 후 매치되면 token 생성 후 return.
        const {token} = await this.userService.loginUser(loginId, password);

            // res.cookie('token', token);
        res.status(200).json({
                token: token,
        });
        } catch (error) {
            console.log(error);
           return res.status(error.statusCode || 500).json({message: "아이디 및 비밀번호가 다릅니다."});
        }  
    };
};

module.exports = UserController;