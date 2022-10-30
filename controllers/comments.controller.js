const CommentsService = require('../services/comments.service');

class CommentsController {
    commentsService = new CommentsService();
    //전체 댓글 목록 보기
    getComments = async (req, res, next) => {
        const {goodsId} = req.params;

        try {
            const getAllComments = await this.commentsService.findAllComments(goodsId);
            res.status(200).json({comments: getAllComments});
        } catch (err) {
            const errormessage = `${req.method} ${req.originalUrl} : ${err.message}`;
            console.log(errormessage);
            res.status(400).json({errormessage});
        }
    };

//신규 댓글
    createComment = async (req, res, next) => {
        try {
            const {userId, userName} = res.locals.user;
            const {goodsId} = req.params;
            const {content} = req.body;
            const img = req.file.location;

            if (!content) {
                res.status(412).json({errorMessage: '댓글 내용을 입력해주세요😌'});
                return;
            }
            const createComment = await this.commentsService.createComment(goodsId, userId, userName, img, content);
            res.status(201).json({message: '댓글을 등록했어요😚', createComment});
        } catch (err) {
            if (err.code === -1) {
                res.status(401).send({errorMessage: '댓글 등록 fail,,,'});
            }
            const errormessage = `${req.method} ${req.originalUrl} : ${err.message}`;
            console.log(errormessage);
            res.status(400).json({errormessage});
        }
    };

    //댓글 수정
    updateComment = async (req, res) => {
        try {
            const {userId} = res.locals.user;
            const {content} = req.body;
            const {commentsId} = req.params;

            const updateComment = await this.commentsService.updateComment(userId, commentsId, content);
            res.status(200).json(updateComment);
        } catch (err) {
            if (err.code === -1) {
                res.status(401).send({errorMessage: '댓글 수정 fail,,,'});
            }
            const errormessage = `${req.method} ${req.originalUrl} : ${err.message}`;
            console.log(errormessage);
            res.status(400).json({errormessage});
        }
    };

    //댓글 삭제
    deleteComment = async (req, res) => {
        try {
            const {userId} = res.locals.user;
            const {commentsId} = req.params;

            const deleteComment = await this.commentsService.deleteComment(userId, commentsId);
            if (deleteComment === 0) {
                return res.status(400).json({message: "작성자 본인만 삭제할 수 있어요~!"});
            }
            res.status(200).json({message: "댓글 삭제 완료!!"})
        } catch (err) {
            if (err.code === -1) {
                const errormessage = `${req.method} ${req.originalUrl} : ${err.message}`;
                console.log(errormessage);
                res.status(400).json({errormessage});
            }
        }
    };
}

module.exports = CommentsController;