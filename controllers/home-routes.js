// require dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Blogger, Comment, Feel } = require('../models');

// route for homepage
router.get('/', (req, res) => {
    Blog.findAll({
        attributes: [
            'id',
            'title',
            'context',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM feel WHERE blog.id = feel.blog_id)'), 'feel_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'blogger_id', 'blog_id', 'created_at'],
                include: [
                    {
                        model: Blogger,
                        attributes: ['username']
                    }
                ]
            },
            {
                model: Blogger,
                attributes: ['username']
            }
        ]
    }).then(dbBlogData => {
        const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to get blog when comments clicked on

// export routes
module.exports = router;