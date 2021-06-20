// require dependencies
const Blogger = require('./Blogger');
const Blog = require('./Blog');
const Comment = require('./Comment');

// associations
Blogger.hasMany(Blog, {
    foreignKey: 'blogger_id'
});

Blog.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

Blogger.hasMany(Comment, {
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

// export models
module.exports = { Blogger, Blog, Comment };