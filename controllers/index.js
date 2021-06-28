// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// set url paths for routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export all router routes
module.exports = router;