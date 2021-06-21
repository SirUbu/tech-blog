// require dependencies
const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

// create Comment model
class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
            type: DataTypes.STRING,
            references: {
                model: 'blogger',
                key: 'id'
            }
        },
        blog_id: {
            type: DataTypes.STRING,
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