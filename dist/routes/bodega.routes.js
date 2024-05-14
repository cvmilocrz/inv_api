"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jwtValidator = require("../jwt/jwt.validator.js");
var _express = require("express");
var _bodegaController = require("../controllers/bodega.controller.js");
var router = (0, _express.Router)();

// Rutas para diademas
router.get('/getStorageHeadInfoRoute', _jwtValidator.verifyToken, _bodegaController.GetHeadsetStorageInfo);
router.post('/addHeadsetStorageInfoRoute', _jwtValidator.verifyToken, _bodegaController.addHeadsetStorageInfo);
router["delete"]('/deleteHeadsetInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.deleteHeadsetInStorage);
router.put('/updateHeadsetInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.updateHeadsetInStorage);

// Rutas para teclados
router.get('/getKeyboardStorageInfoRoute', _jwtValidator.verifyToken, _bodegaController.getKeyboardStorageInfo);
router.post('/addKeyboardInStorageRoute', _jwtValidator.verifyToken, _bodegaController.addKeyboardInStorage);
router["delete"]('/deleteKeyboardInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.deleteKeyboardInStorage);
router.put('/updateKeyboardInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.updateKeyboardInStorage);

// Rutas para ratones
router.get('/getMouseInStorageRoute', _jwtValidator.verifyToken, _bodegaController.getMouseStorageInfo);
router.post('/addMouseInStorageRoute', _jwtValidator.verifyToken, _bodegaController.addMouseInStorage);
router["delete"]('/deleteMouseInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.deleteMouseInStorage);
router.put('/updateMouseInStorageRoute/:id', _jwtValidator.verifyToken, _bodegaController.updateMouseInStorage);

//rutas para pc en bodega
router.get('/getPcStorageInfo', _jwtValidator.verifyToken, _bodegaController.getPcStorageInfo);
router.post('/addPcInStorage', _jwtValidator.verifyToken, _bodegaController.addPcInStorage);
router["delete"]('/deletePcInStorage/:id', _jwtValidator.verifyToken, _bodegaController.deletePcInStorage);
router.put('/updatePcInStorage/:id', _jwtValidator.verifyToken, _bodegaController.updatePcInStorage);
var _default = exports["default"] = router;