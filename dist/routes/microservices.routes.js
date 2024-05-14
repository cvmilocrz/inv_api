"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _microservicesController = require("../controllers/microservices.controller.js");
var _jwtValidator = require("../jwt/jwt.validator.js");
var router = (0, _express.Router)();
router.get('/totalusers', _jwtValidator.verifyToken, _microservicesController.totalusers);
router.get('/totaloffices', _jwtValidator.verifyToken, _microservicesController.totaloffices);
router.get('/totalequipos', _jwtValidator.verifyToken, _microservicesController.totalequipos);
router.get('/totaldiademas', _jwtValidator.verifyToken, _microservicesController.totaldiademas);

//cantidad de elementos en bodega
router.get('/totalpcBodega', _jwtValidator.verifyToken, _microservicesController.totalpcBodega);
router.get('/totalratonesBodega', _jwtValidator.verifyToken, _microservicesController.totalratonesBodega);
router.get('/totaldiademasBodega', _jwtValidator.verifyToken, _microservicesController.totaldiademasBodega);
router.get('/totaltecladosBodega', _jwtValidator.verifyToken, _microservicesController.totaltecladosBodega);

//contar diademas dañadas
var _default = exports["default"] = router;