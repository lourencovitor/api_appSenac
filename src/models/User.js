const Sequelize = require("sequelize");
const connection = require("../config/connection");

const User = connection.define("user", {
    name:{
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
        notEmpty: true
        }
    },
    password:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
})

module.exports = User;