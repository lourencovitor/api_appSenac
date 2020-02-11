const Sequelize = require("sequelize");
const connection = require("../config/connection");

const Area = connection.define("area", {
    description:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    active:{
        type: Sequelize.BOOLEAN(),
        allowNull: false,
        validate: {
            notEmpty: true
        } 
    }
})

module.exports = Area;