const {Users} = require('../models');

class UserRepository {
    // User 정보 생성.
    createUser = async (loginId, userName, password, address) => {
        const createUserData = await Users.create({
            loginId,
            userName,
            password,
            address
          });
         
         
          return createUserData;
    };


    //loginId로 User 정보 찾기
    loginUser = async (loginId) => {
       const user = await Users.findOne({where: {loginId}})
        return user;
    }
}

module.exports = UserRepository;