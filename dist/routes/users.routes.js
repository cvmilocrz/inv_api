"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usersController = require("../controllers/users.Controller.js");
var _jwtValidator = require("../jwt/jwt.validator.js");
var router = (0, _express.Router)();
router.get('/getusers', _jwtValidator.verifyToken, _usersController.getUsers);
router.get('/getallusers', _jwtValidator.verifyToken, _usersController.getAllUsers);
router.post('/createUsers', _jwtValidator.verifyToken, _usersController.createUsers);
router["delete"]('/deleteusers/:id', _jwtValidator.verifyToken, _usersController.deleteUsers);
router.put('/updateusers/:id', _jwtValidator.verifyToken, _usersController.updateUsers);
router.get('/cargoroute', _usersController.getUserCargo);
var _default = exports["default"] = router;