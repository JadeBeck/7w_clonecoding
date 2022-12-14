const UserRepository = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// 암호화 연산 10회 설정

require("dotenv").config();

class UserService {
  userRepository = new UserRepository();

  //아이디 중복검사
  checkID = async (loginId) => {
    const user = await this.userRepository.findUser(loginId);
    if (!user) {
      return //checkId 함수 종료 후 controller로 돌아감
    } else{
      throw { message: "중복된 아이디입니다." };  //여기서 에러에 걸리면 controller로 돌아가서
    }
  };
  
  //회원가입
  createUser = async (loginId, userName, password, address) => {
    const user = await this.userRepository.loginUser(loginId);
    const encryptedPW = bcrypt.hashSync(password, 10); //비밀번호 암호화 hashSync
    password = encryptedPW

    if (!user) {
      const createUserData = await this.userRepository.createUser(
        loginId,
        userName,
        password,
        address
      );   
      return createUserData;
    } else {
      throw { message: "아이디 중복확인을 해주세요." };
    }
  };


  //로그인
  loginUser = async (loginId, password) => {
    const user = await this.userRepository.loginUser(loginId, password); //
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
      userinfo: {userId : user.userId, loginId : user.loginId, userName : user.userName, address : user.address}
    };
  }

};

module.exports = UserService;
