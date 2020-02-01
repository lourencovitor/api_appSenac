const Sequelize = require("sequelize");
const connection = require("../config/connection");

const UpdatePassword = connection.define("update_password", {
    creationDate:{
        type: Sequelize.DATE(),
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    key:{
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
        notEmpty: true
        } 
    },
    useDate:{
        type: Sequelize.DATE(),
    },
    user:{
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: "users",
            key: "email"
          }
    }
})

module.exports = UpdatePassword;