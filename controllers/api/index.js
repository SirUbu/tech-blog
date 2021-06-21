// require dependencies
const router = require('express').Router();

// require routes
const bloggerRoutes = require('./blogger-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

// set url path
router.use('/bloggers', bloggerRoutes);
// router.use('/blogs', blogRoutes);
// router.use('/comments', commentRoutes);


// export all router routes
module.exports = router;