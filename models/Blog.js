// require dependencies
const { Model, DataTypes } = require ('sequelize');
const uniqid = require('uniqid');
const sequelize = require('../config/connection');

// create Blog model
class Blog extends Model {
    // add static addFeels operation
    static addFeels(body, models) {
        return models.Feel.create({
            blogger_id: body.blogger_id,
            blog_id: body.blog_id
        }).then(() => {
            return Blog.findOne({
                where: {
                    id: body.blog_id
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
                        model: models.Comment,
                        attributes: ['id', 'comment_text', 'blog_id', 'blogger_id', 'created_at'],
                        include: {
                            model: models.Blogger,
                            attributes: ['username']
                        }
                    }
                ]
            });
        });
    }
};

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // defaultValue: uniqid('Bl-', '-og'),
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        context: {
            type: DataTypes.STRING(500),
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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog'
    }
);

// export Blog model
module.exports = Blog;