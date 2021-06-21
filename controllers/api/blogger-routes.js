// require dependencies
const router = require('express').Router();
const uniqid = require('uniqid');
const { Blogger, Blog, Feel, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all bloggers
router.get('/', (req, res) => {
    Blogger.findAll({
        attributes: { exclude: ['password'] }
    }).then(dbBloggerData => res.json(dbBloggerData)
    ).catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

// GET single blogger
router.get('/:id', (req, res) => {
    Blogger.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Blog,
                attributes: ['id', 'title', 'context' ,'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Blog,
                    attributes: ['title']
                }
            },
            {
                model: Blog,
                attributes: ['title'],
                through: Feel,
                as: 'blogger_feels'
            }
        ]
    }).then(dbBloggerData => {
        if (!dbBloggerData) {
            res.status(404).json({ message: 'There is no blogger by that id.' });
            return;
        }
        res.json(dbBloggerData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST create a blogger
router.post('/', (req, res) => {
    let id = uniqid('T-', '-B');
    Blogger.create({
        id: id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(dbBloggerData => {
        req.session.save(() => {
            req.session.blogger_id = dbBloggerData.id;
            req.session.username = dbBloggerData.username;
            req.session.admin = dbBloggerData.admin;
            req.session.loggedIn = true;

            res.status(201).json({ user: dbBloggerData.username, message: 'New blogger created.' })
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST login a blogger
router.post('/login', (req, res) => {
    Blogger.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbBloggerData => {
        if (!dbBloggerData) {
            res.status(401).json({ message: 'Invalid loggin email.' });
            return;
        }

        // Verify User
        const validPassword = dbBloggerData.validatePassword(req.body.password);
        
        if (!validPassword) {
            res.status(401).json({ message: 'Incorrect password.' });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.blogger_id = dbBloggerData.id;
            req.session.username = dbBloggerData.username;
            req.session.admin = dbBloggerData.admin;
            req.session.loggedIn = true;

            res.status(200).json({ user: dbBloggerData.username, message: 'You are now logged in.' });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST logout a blogger
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// PUT update a blogger
router.put('/:id', (req, res) => {
    Blogger.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    }).then(dbBloggerData => {
        if (!dbBloggerData[0]) {
            res.status(404).json({ message: 'There is no blogger with that id.' });
            return;
        }
        res.status(201).json({ user: dbBloggerData.username, message: 'Blogger information updated.'});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE a blogger
router.delete('/:id', (req, res) => {
    Blogger.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbBloggerData => {
        if (!dbBloggerData) {
            res.status(404).json({ message: 'There is no blogger with that id.' });
            return;
        }
        res.status(200).json({ user: dbBloggerData.username, message: 'Blogger deleted successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export routes
module.exports = router;