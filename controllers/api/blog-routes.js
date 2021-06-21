// require dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const uniqid = require('uniqid');
const { Blogger, Blog, Feel, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blogs
router.get('/', (req, res) => {
    Blog.findAll({
        attributes: [
            'id',
            'title',
            'context',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM feel WHERE blog.id = feel.blog_id)'), 'feel_total']
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
        ],
        order: ['created_at', 'DESC']
    }).then(dbBlogData => res.json(dbBlogData)
    ).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// GET a single blog
router.get('/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'context',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM feel WHERE blog.id = feel.blog_id)'), 'feel_total']
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
            res.status(404).json({ message: 'There is no post with that id.' });
            return;
        }
        res.json(dbBlogData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST create a new blog
router.post('/', (req, res) => {
   let id = uniqid('Bl-', '-og');
    Blog.create({
        id: id,
        title: req.body.title,
        context: req.body.context,
        blogger_id: req.session.user_id
    }).then(dbBlogData => res.status(201).json({ title: dbBlogData.title, message: 'Blog created successfully.' })
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT addFeel a blog
router.put('/addFeel', (req, res) => {
    Blog.addFeel({ ...req.body, blogger_id: req.session.blogger_id }, { Feel, Comment, Blogger }
    ).then(updatedBlogData => res.status(201).json(updatedBlogData)
    ).catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// DELETE a blog
router.delete('/:id', (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'There is no blog with that id.' });
            return;
        }
        res.status(200).json({ blog: dbBlogData.title, message: 'Blog deleted successfully.' })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export routes
module.exports = router;