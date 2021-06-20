// require dependencies
const { Model, DataTypes } = require ('sequelize');
const uniqid = require('uniqid');
const sequelize = require('../config/connection');

// create Blog model
class Blog extends Model {
    // logic to addFeel will go here
};

Blog.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: uniqid('Bl-', '-og'),
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        context: {
            type: DataTypes.STRING
        },
        blogger_id: {
            type: DataTypes.STRING,
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