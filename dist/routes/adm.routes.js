"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _admController = require("../controllers/adm.controller.js");
var _jwtValidator = require("../jwt/jwt.validator.js");
var router = (0, _express.Router)();
router.get('/getAdmOfficeInf', _jwtValidator.verifyToken, _admController.getAdmUinfo);
router.post('/insertAdmData', _jwtValidator.verifyToken, _admController.insertAdmOfData);
router["delete"]('/deleteAdmPc/:id', _jwtValidator.verifyToken, _admController.deleteAdmpc);
router.put('/updateAdmPC/:id', _jwtValidator.verifyToken, _admController.updateAdmpc);
var _default = exports["default"] = router;