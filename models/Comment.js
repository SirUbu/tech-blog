// require dependencies
const { Model, DataTypes } = require ('sequelize');
const uniqid = require('uniqid');
const sequelize = require('../config/connection');

// create Comment model
class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            // defaultValue: uniqid('C-', '-T'),
            unique: true
        },
        comment_text: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        blogger_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogger',
                key: 'id'
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

// export Comment model
module.exports = Comment;