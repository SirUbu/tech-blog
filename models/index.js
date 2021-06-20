// require dependencies
const Blogger = require('./Blogger');
const Blog = require('./Blog');
const Comment = require('./Comment');
const Feel = require('./Feel');

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

Blogger.belongsToMany(Blog, {
    through: Feel,
    as: 'blogger_feels',
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

Blog.belongsToMany(Blogger, {
    through: Feel,
    as: 'blogger_feels',
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

Feel.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
    onDelete: 'SET NULL'
});

Feel.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

Blogger.hasMany(Feel, {
    foreignKey: 'blogger_id',
});

Blog.hasMany(Feel, {
    foreignKey: 'blog_id'
});

// export models
module.exports = { Blogger, Blog, Comment, Feel };