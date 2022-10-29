const CommentsService = require('../services/comments.service');

class CommentsController {
    commentsService = new CommentsService();
    //댓글 목록 보기
    getComments = async (req, res, next) => {
        const {goodsId} = req.params;
        try {
            const comments = await this.commentsService.findAllComments(goodsId);
            res.status(200).json({message: comments});
        } catch (err) {
            const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
            console.log(errormessage);
            res.status(400).json({errormessage});
        }
    };

//신규 댓글
    createComment = async (req, res, next) => {
        const {goodsId} = req.params;
        const {id, userName} = res.locals.user;
        try {
            const {commentImage, content} = req.body;

            if (!content) {
                res.status(412).json({errorMessage: '댓글 내용을 입력해주세요😌'});
                return;
            }
            // if (!imageUrl) {
            //     res.status(412).json({errorMessage: '이미지 입력 안했누'});
            //     return;
            // }
            // if (!goodsDetail) {
            //     res.status(412).json({errorMessage: '설명 입력 안했누'});
            //     return;
            // }

            const createComments = await this.commentsService.createComment(goodsId, id, userName, commentImage, content);

            res.status(201).json({message: '댓글을 등록했어요😚', createComments});
        } catch (err) {
            if (err.code === -1) {
                res.status(401).send({errorMessage: '댓글 등록 fail,,,'});
            }
            const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
            console.log(errormessage);
            res.status(400).json({errormessage});
        }
    };

    //댓글 수정
    updateComment = async (req, res) => {
        try {
            const {content} = req.body;
            const {commentId} = req.params;
            const {id} = res.locals.user;

            const commentData = await this.commentsService.updateComment(commentId, content);
            res.status(200).json(commentData);
        } catch (error) {

        }

    };

    //댓글 삭제
    deleteComment = async (req, res) => {
        const {user} = res.locals;
        const {commentId} = req.params;

        const commentData = await this.commentsService.deleteComment(commentId, user.userId);

        if (commentData === false) {
            return res.status(400).json({message: "작성자 본인만 삭제할 수 있습니다."})
        }
        res.status(200).json({message: "삭제 완료."})
    };
}

module.exports = CommentsController;