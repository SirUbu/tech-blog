// require dependencies
const sequelize = require('../config/connection');

// require seed files
const seedBloggers = require('./blogger-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');
const seedFeels = require('./feel-seeds');

// create async seeding function
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--Syn Established--');
    await seedBloggers();
    console.log('--Bloggers Seeded--');
    await seedBlogs();
    console.log('--Blogs Seeded--');
    await seedComments();
    console.log('--Comments Seeded--');
    await seedFeels();
    console.log('--Feels Seeded--');

    console.log('--All Seed Data Completed--');

    process.exit(0);
};

// call async seeding function
seedAll();