<<<<<<< HEAD
const {Users} = require('../models');
=======
const {Users} = require('../models/index');
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f

class UserRepository {
    // User 정보 생성.
    createUser = async (userId,userName ,password,address) => {

        const createMembersData = await Users.create({
            userId,
            userName,
            password,
            address
          });
          return createMembersData;
       
    };

   

    //userId로 User 정보 찾기
    findUser = async (userId) => {
        // try {
            //userId 와 일치하는 회원 정보 서칭.
            const userData = await Users.findOne({
                where: {userId}
            });
            return userData;
        // } catch (error) {
        //     error.message = (error);
        //     error.statusCode = 500;
        //     throw error;
        // }
    };

}

module.exports = UserRepository;