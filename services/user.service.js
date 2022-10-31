const UserRepository = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// 암호화 연산 10회 설정

require("dotenv").config();

class UserService {
  userRepository = new UserRepository();

  //회원가입
  createUser = async (loginId, userName, password, address) => {
    const user = await this.userRepository.loginUser(loginId);
    if (user) {
      throw { message: "이미 존재하는 아이디입니다." };
    }

    // hashSync
    const encryptedPW = bcrypt.hashSync(password, 10); //비밀번호 암호화
    password = encryptedPW

    const createUserData = await this.userRepository.createUser(
      loginId,
      userName,
      password,
      address
    );
    return createUserData;
  };


  //로그인
  loginUser = async (loginId, password) => {
    const user = await this.userRepository.loginUser(loginId, password);  //
    if (!user) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    const same = bcrypt.compareSync(password, user.password);
    if(!same) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    return {
      token: jwt.sign({ userId: user.userId, userName: user.userName }, process.env.SECRETKEY, {  //토큰 만들어주기
        expiresIn: "24h",  
      }),
    };
  };

  
}

module.exports = UserService;
