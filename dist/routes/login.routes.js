"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../controllers/login.controller.js");
var router = (0, _express.Router)();
router.post('/login', _loginController.login);
var _default = exports["default"] = router;