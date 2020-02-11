const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");
const updatePassword = require("./controllers/UpdatePasswordController");
const UserCodeController = require("./controllers/UserCodeController");
const AreaController = require("./controllers/AreaController");

routes.get("/api", (req, res) => {
  res.json({
    message: "Bem vindos!"
  });
});

routes.get("/api/user", UserController.index);
routes.post("/api/user", UserController.store);
routes.get("/api/user/:id", UserController.show);
routes.put("/api/user/:id", UserController.update);
routes.delete("/api/user/:id", UserController.delete);

routes.post("/api/login", LoginController.show);
routes.post("/api/updatePassword", updatePassword.store);
routes.post("/api/code", UserCodeController.store);

routes.post("/api/area", AreaController.store);
routes.get("/api/area", AreaController.index);
routes.get("/api/area/:id", AreaController.show);
routes.put("/api/area/:id", AreaController.update);
routes.delete("/api/area/:id", AreaController.delete);

module.exports = routes;
