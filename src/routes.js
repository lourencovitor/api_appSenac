const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");
const updatePassword = require("./controllers/UpdatePasswordController");
const UserCodeController = require("./controllers/UserCodeController");
const AreaController = require("./controllers/AreaController");
const SubAreaController = require("./controllers/SubAreaController");
const CursoController = require("./controllers/CursoController");

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

routes.post("/api/subArea", SubAreaController.store);
routes.get("/api/subArea", SubAreaController.index);
routes.get("/api/subArea/:id", SubAreaController.show);
routes.put("/api/subArea/:id", SubAreaController.update);
routes.post("/api/subArea/:id", SubAreaController.delete);

routes.post("/api/curso", CursoController.store);
routes.get("/api/curso", CursoController.index);
routes.get("/api/curso/:id", CursoController.show);
routes.put("/api/curso/:id", CursoController.update);
routes.delete("/api/curso/:id", CursoController.delete);

module.exports = routes;
