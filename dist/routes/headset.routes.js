"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _headsetController = require("../controllers/headset.controller.js");
var _jwtValidator = require("../jwt/jwt.validator.js");
var _uploads = _interopRequireDefault(require("../middleware/uploads.js"));
var router = (0, _express.Router)();
router.get('/getHeadsetInf', _jwtValidator.verifyToken, _headsetController.getHeadsetinfo);
router.post('/postHeadsetInf', _jwtValidator.verifyToken, _uploads["default"].single('file'), _headsetController.addHeadsetInfo);
router["delete"]('/deleteHeadsetInf/:id', _jwtValidator.verifyToken, _headsetController.deleteHeadsetInfo);
router.put('/updateHeadserInf/:id', _jwtValidator.verifyToken, _headsetController.updateHeadserInf);
router.get('/acta', _headsetController.getHeadsetFile);
router["delete"]('/deleteHeadsetFile/:doc', _headsetController.deleteHeadsetFile);
var _default = exports["default"] = router;