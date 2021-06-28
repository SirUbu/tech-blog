// require dependencies
const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

// create Feel model
class Feel extends Model {};

Feel.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
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
        modelName: 'feel'
    }
);

// export Feel model
module.exports = Feel;