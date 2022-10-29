const CartRepository = require('../repositories/cart.repository');

class CartService {
  cartRepository = new CartRepository();

  // 장바구니 생성
  createCt = async ( comment, postId, id, nickname ) => {
    const createCommentData = await this.cartRepository.createCt(
      comment,
      postId,
      id,
      nickname,
    );

    return {
      postId: createCommentData.postId,
      nickname: createCommentData.nickname,
      comment: createCommentData.comment,
      createdAt: createCommentData.createdAt,
      updatedAt: createCommentData.updatedAt,
    };
  };

  // 장바구니 조회
  findAllCart = async (postId) => {
    const allCart = await this.cartRepository.findAllCart(postId);

    return allCart.map((cart) => {
      return {
        commentId: cart.commentId,
        nickname: cart.nickname,
        comment: cart.comment,
        createdAt: cart.createdAt,
        updatedAt: cart.updatedAt,
      };
    });
  };
    
  // 장바구니 수정
  updateCt = async (comment, commentId, id) => {
    const FindCmt = await this.cartRepository.findCmtById(commentId);
    if (!FindCmt) throw new Error("댓글이 존재하지 않았습니다.");

    if (id === FindCmt.id) {
      await this.cartRepository.updateCt(comment, commentId, id);
      return '댓글을 수정하였습니다.';
    } else {
      throw new Error("수정 권한이 없습니다.");
    }
  };

  // 장바구니 삭제
  deleteCt = async (cartId, id) => {
    const findCart = await this.cartRepository.findCartById(cartId);
    if (!findCart) throw new Error("장바구니가 존재하지 않았습니다.");

    if (id === FindCmt.id) {
      await this.cartRepository.deleteCt(commentId, id);
      return '댓글을 삭제하였습니다.';
    } else {
      throw new Error("삭제 권한이 없습니다.");
    }
  };
}

module.exports = CartService;