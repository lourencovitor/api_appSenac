const Sequelize = require("sequelize");
const connection = require("../config/connection");

const Curso = connection.define("curso", {
    description:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    url:{
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        } 
    },
    banner:{
        type: Sequelize.BOOLEAN(),
        allowNull: false,
        validate: {
            notEmpty: true
        } 
    },
    ativo:{
        type: Sequelize.BOOLEAN(),
        allowNull: false,
        validate: {
            notEmpty: true
        }  
    },
    imagem:{
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        }  
    },
    subArea:{
        type: Sequelize.INTEGER(),
        allowNull:false,
        validate:{
            notEmpty:true
        },
        references: {
            model: "subAreas",
            key: "id"
          }
    }
})

module.exports = Curso;