// require dependencies
const router = require('express').Router();
const uniqid = require('uniqid');
const { Blogger, Blog, Feel, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll().then(dbCommentData => res.status(200).json(dbCommentData)
    ).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// POST create new comment
router.post('/', (req, res) => {
    let id = uniqid('C-', '-T');
    Comment.create({
        id: id,
        comment_text: req.body.comment_text,
        blogger_id: req.session.user_id,
        blog_id: req.body.blog_id
    }).then(dbCommentData => res.status(201).json({ comment_id: dbCommentData.id, message: 'Comment created successfully.' })
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'There is no comment with that id.' });
            return;
        }
        res.status(200).json({ comment_id: dbCommentData.id, message: 'Comment deleted successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export routes
module.exports = router;