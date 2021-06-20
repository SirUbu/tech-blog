// require dependencies
const Blogger = require('./Blogger');
const Blog = require('./Blog');

// associations
Blogger.hasMany(Blog, {
    foreignKey: 'blogger_id'
});

Blog.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

// export models
module.exports = { Blogger, Blog };