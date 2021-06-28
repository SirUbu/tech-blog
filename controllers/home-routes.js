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

// route for login/signup page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to get blog when comments clicked on
router.get('/blog/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        },
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
                attributes: ['id', 'comment_text', 'blog_id', 'blogger_id', 'created_at'],
                include: {
                    model: Blogger,
                    attributes: ['username']
                }
            },
            {
                model: Blogger,
                attributes: ['username']
            }
        ]
    }).then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'There is no blog by that id.' });
            return;
        }
        const blog = dbBlogData.get({ plain: true });
        res.render('single-blog', {
            blog,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export routes
module.exports = router;