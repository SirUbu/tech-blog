// require dependencies
const { Model, DataTypes } = require ('sequelize');
const uniqid = require('uniqid');
const sequelize = require('../config/connection');

// create Feel model
class Feel extends Model {};

Feel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            // defaultValue: uniqid('F-', '-l'),
            unique: true
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
        modelName: 'feel'
    }
);

// export Feel model
module.exports = Feel;