"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _officesController = require("../controllers/offices.controller.js");
var _jwtValidator = require("../jwt/jwt.validator.js");
var router = (0, _express.Router)();
router.get('/getAllOffices', _jwtValidator.verifyToken, _officesController.getAllOffice);
router.get('/getOfficesInfo/:tableName', _jwtValidator.verifyToken, _officesController.getOfficeInfo);
router.post('/createOffice', _jwtValidator.verifyToken, _officesController.createOffice);
router["delete"]('/deleteOffices/:tableName', _jwtValidator.verifyToken, _officesController.deleteOffice);
router.post('/insertdata/:tableName', _jwtValidator.verifyToken, _officesController.insertOfficedata);
var _default = exports["default"] = router;