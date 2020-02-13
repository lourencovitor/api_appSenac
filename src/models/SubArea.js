const Sequelize = require("sequelize");
const connection = require("../config/connection");

const SubArea = connection.define("subArea", {
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
    },
    area:{
        type: Sequelize.INTEGER(),
        allowNull:false,
        validate:{
            notEmpty:true
        },
        references: {
            model: "areas",
            key: "id"
          }
    }
})

module.exports = SubArea;