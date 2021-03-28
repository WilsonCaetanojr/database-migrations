const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const routes = express.Router();

routes.post("/user", UserController.store);
routes.post("/address/:idUser", AddressController.store);

module.exports = routes;
