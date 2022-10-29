const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// 암호화 연산 10회 설정
const saltRounds = 12;

require('dotenv').config();

class UserService {
    userRepository = new UserRepository();



    createUser = async (loginId,userName, password,address) => {
        const createUserData = await this.userRepository.createUser(
            loginId,
            userName,
            password,
            address
          );
          return createUserData;
    };





    loginUser = async (loginId, password) => {

        try {

            //userId로 DB에 있는 회원 정보 가져오기.
            const userData = await this.userRepository.findUser(loginId);  //없는 아이디로 로그인 할때 에러내용이 패스워드가 null로 나와서 아예 에러 뜨게 해버림

            if (userData === null) {
                return {'message': '가입 되어있는 정보가 아닙니다.'};
                
            }

            // 가져온 회원 정보에 있는 hash 된 비밀번호와 위에서 hash 한 비밀번호가 일치하는지 확인.
            const match = bcrypt.compareSync(password, userData.password);

            if (!match) {
                const error = new Error(`UserService Error`);
                error.message = `비밀번호가 일치하지 않습니다.`;
                error.statusCode = 400;
                throw error;
            }
            // 유효시간이 24시간인 token 발급.
            return {
                token: jwt.sign(
                    {id: userData.id},
                    process.env.SECRETKEY,
                    {expiresIn: '24h'})
    
            };  
        } catch (error) {
            throw error;
        }
         
    };                      
    
}

module.exports = UserService;
