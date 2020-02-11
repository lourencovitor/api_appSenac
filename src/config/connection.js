const Sequelize = require("sequelize");
const {database, user, password} = require('../utils/acesso');

const sequelize = new Sequelize(database, user, password, {
    host: "localhost",
    dialect: "mysql"
  }); 

    sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado com sucesso! \n");
    })
    .catch((error) => {
        console.log("Falha ao se conectar: " + error);
    });

  module.exports = sequelize;