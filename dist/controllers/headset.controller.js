"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHeadserInf = exports.getHeadsetinfo = exports.getHeadsetFile = exports.deleteHeadsetInfo = exports.deleteHeadsetFile = exports.addHeadsetInfo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var _fs = _interopRequireDefault(require("fs"));
var addHeadsetInfo = exports.addHeadsetInfo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, lote, firstName, lastName, doc, campaing, model, creation, createdby, connection, fileBuffer;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, lote = _req$body.lote, firstName = _req$body.firstName, lastName = _req$body.lastName, doc = _req$body.doc, campaing = _req$body.campaing, model = _req$body.model, creation = _req$body.creation, createdby = _req$body.createdby;
          if (!(!lote || !firstName || !lastName || !doc || !campaing || !model || !creation || !createdby || !req.file)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            msg: "Todos los campos, incluido el archivo, son necesarios."
          }));
        case 3:
          _context.prev = 3;
          _context.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context.sent;
          fileBuffer = _fs["default"].readFileSync(req.file.path);
          _context.next = 10;
          return connection.query(_index.headsetQueries.addHeadsetInfoQuery, [lote, firstName, lastName, doc, campaing, model, creation, createdby]);
        case 10:
          _context.next = 12;
          return connection.query(_index.headsetQueries.addHeadsetFileQuery, [doc, fileBuffer]);
        case 12:
          _fs["default"].unlinkSync(req.file.path);
          return _context.abrupt("return", res.status(201).json({
            msg: "Usuario creado exitosamente."
          }));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          console.error("Error al crear usuario:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 16]]);
  }));
  return function addHeadsetInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateHeadserInf = exports.updateHeadserInf = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, lote, firstName, lastName, doc, campaing, model, creation, createdby, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, lote = _req$body2.lote, firstName = _req$body2.firstName, lastName = _req$body2.lastName, doc = _req$body2.doc, campaing = _req$body2.campaing, model = _req$body2.model, creation = _req$body2.creation, createdby = _req$body2.createdby;
          if (!(!lote || !firstName || !lastName || !doc || !campaing || !model || !creation || !createdby)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos están completos."
          }));
        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context2.sent;
          _context2.next = 10;
          return connection.query(_index.headsetQueries.updateHeadserInfQuery, [lote, firstName, lastName, doc, campaing, model, creation, createdby, id]);
        case 10:
          result = _context2.sent;
          if (!(result.affectedRows === 0)) {
            _context2.next = 13;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 13:
          return _context2.abrupt("return", res.status(200).json({
            msg: "Usuario actualizado exitosamente."
          }));
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          console.error("Error al actualizar usuario:", _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 16]]);
  }));
  return function updateHeadserInf(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getHeadsetinfo = exports.getHeadsetinfo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context3.sent;
          _context3.next = 6;
          return connection.query(_index.headsetQueries.getHeadsetinfoQuery);
        case 6:
          result = _context3.sent;
          res.json(result);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).json({
            msg: "Error interno del servidor."
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getHeadsetinfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteHeadsetInfo = exports.deleteHeadsetInfo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          if (id) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: "Por favor proporciona un ID válido."
          }));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context4.sent;
          _context4.next = 9;
          return connection.query(_index.headsetQueries.deleteHeadsetInfoQuery, [id]);
        case 9:
          result = _context4.sent;
          if (!(result.affectedRows === 0)) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 12:
          return _context4.abrupt("return", res.status(200).json({
            msg: "Usuario eliminado exitosamente."
          }));
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](3);
          console.error("Error al eliminar usuario:", _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 15]]);
  }));
  return function deleteHeadsetInfo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getHeadsetFile = exports.getHeadsetFile = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var doc, connection, result, fileBuffer;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          doc = req.query.doc;
          if (doc) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: "No se ha recibido un valor de documento."
          }));
        case 3:
          _context5.prev = 3;
          _context5.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context5.sent;
          _context5.next = 9;
          return connection.query(_index.headsetQueries.getHeadsetFileQuery, [doc]);
        case 9:
          result = _context5.sent;
          if (!(result.length === 0)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            msg: "Archivo no encontrado para este documento."
          }));
        case 12:
          fileBuffer = result[0].igsfile;
          res.setHeader('Content-Type', 'application/pdf');
          res.send(fileBuffer);
          _context5.next = 21;
          break;
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](3);
          console.error("Error al encontrar el archivo:", _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 17]]);
  }));
  return function getHeadsetFile(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteHeadsetFile = exports.deleteHeadsetFile = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var doc, connection, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          doc = req.params.doc;
          if (doc) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: "no se ha recibido un valor"
          }));
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context6.sent;
          _context6.next = 9;
          return connection.query(_index.headsetQueries.deleteHeadsetFileQuery, [doc]);
        case 9:
          result = _context6.sent;
          if (!(result.affectedRows === 0)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            msg: "Archivo no encontrado."
          }));
        case 12:
          return _context6.abrupt("return", res.status(200).json({
            msg: "Archivo eliminado exitosamente."
          }));
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](3);
          console.error(_context6.t0);
          return _context6.abrupt("return", res.status(400).json({
            msg: "Error al eliminar archivo."
          }));
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 15]]);
  }));
  return function deleteHeadsetFile(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();