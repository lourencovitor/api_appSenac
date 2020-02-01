const express = require("express");
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const updatePassword = require('./controllers/UpdatePasswordController');

routes.get("/api", (req, res)=>{
    res.json({
        message:"Bem vindos!"
    });
})

routes.get("/api/user", UserController.index);
routes.post("/api/user", UserController.store);
routes.get("/api/user/:id", UserController.show);
routes.put("/api/user/:id", UserController.update);
routes.delete("/api/user/:id", UserController.delete);

routes.post("/api/login", LoginController.show);
routes.post("/api/updatePassword", updatePassword.store);

module.exports = routes;