// require dependencies
const { Model, DataTypes } = require ('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create the Blogger model
class Blogger extends Model {
    // set up method to run on instance to validate password
    validatePassword(bloggerPW) {
        return bcrypt.compareSync(bloggerPW, this.password);
    };
};

Blogger.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        hooks: {
            // set beforeCreate lifecycle "hook"
            async beforeCreate(newBloggerData) {
                newBloggerData.password = await bcrypt.hash(newBloggerData.password, 10);
                return newBloggerData
            },
            async beforeCreate(updatedBloggerData) {
                updatedBloggerData.password = await bcrypt.hash(updatedBloggerData.password, 10);
                return updatedBloggerData;
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogger'
    }
);

// export the Blogger model
module.exports = Blogger;