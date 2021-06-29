const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Blogger, Comment, Feel } = require('../models');
const withAuth = require('../utils/auth');

// router to get blogger blogs
router.get('/', withAuth, (req, res) => {
    Blog.findAll({
        where: {
            blogger_id: req.session.blogger_id
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
        res.render('dashboard', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to edit a blogger
router.get('/edit/:id', withAuth, (req, res) => {
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
        const blog = dbBlogData.get({ plain: true });
        res.render('edit-blog', {
            blog,
            loggedIn: true
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export routes
module.exports = router