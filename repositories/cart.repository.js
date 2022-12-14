const { Carts, Goods } = require('../models'); // DB영역에서는 꼭 필요한 존재.


class CartRepository {
  //장바구니 기존에 담은 품목 여부 조회
  didIAlreadyPutThis = async (goodsId, userId) => {
    const didIAlreadyPutThis = await Carts.findOne({
      where: {goodsId, userId}});
    return didIAlreadyPutThis;
  }

  //기존에 담은 품목일 경우 수량만 플러스
  plusNumsOfGoods = async (goodsId, userId, quantity) => {
    await Carts.increment({quantity}, {where: {goodsId, userId}});
    const findGoodsInCart = await Carts.findOne({where: {goodsId, userId}, include: {
        model: Goods,
        key : 'goodsId',
        attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight']}});
    return findGoodsInCart;
  }

  // 장바구니 생성
  createCt = async ( goodsId, userId, quantity ) => {
    await Carts.create({ goodsId, userId, quantity, });
    const createCartData = await Carts.findOne({where: {goodsId, userId}, include: {
      model: Goods,
      key : 'goodsId',
      attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight']}});
  return createCartData;
  };
    
  // 장바구니 조회
  findAllCart = async ( userId ) => {
      const allCart = await Carts.findAll({
      where: { userId },
      include: {
        model: Goods,
        key : 'goodsId',
        attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight'],}    
      });
      return allCart;
    };   
    //   where: { userId },
    //   attributes: ['goodsId'], // 기준이 되는 아이
    //   include: {
    //     model: Goods,
    //     order: [['createdAt', 'DESC']], // carts의 createdAt 기준
    //     attributes: ['goodsName', 'goodsImage', 'price', 'delivery', 'weight'],
    //   }
   

    
  // 장바구니 수정
  updateCt = async (cartsId, userId, quantity) => {
    const updateCartData = await Carts.update(
      { quantity },
      { where: { cartsId, userId } }
    );
    return updateCartData;
  };

  // 장바구니 삭제
  deleteCt = async (cartsId, userId) => {
    const deleteCartData = await Carts.destroy({
      where: { cartsId, userId },
    });
    return deleteCartData;
  };

  // 장바구니 찾기
  findCartById = async (cartsId) => {
    const findCart = await Carts.findOne({ where: { cartsId } });

    return findCart;
  };

  // 굿즈 찾기
  findGoodsById = async (goodsId) => {
    const findGoods = await Goods.findOne({ where: { goodsId } });

    return findGoods;
  };

}

module.exports = CartRepository;