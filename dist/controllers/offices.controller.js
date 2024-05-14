"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertOfficedata = exports.getOfficeInfo = exports.getAllOffice = exports.deleteOffice = exports.createOffice = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getAllOffice = exports.getAllOffice = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query(_index.officesQueries.getAllOffices);
        case 6:
          result = _context.sent;
          res.json(result);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Error al obtener todas las oficinas:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAllOffice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getOfficeInfo = exports.getOfficeInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tableName, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          tableName = req.params.tableName;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context2.sent;
          _context2.next = 7;
          return connection.query(_index.officesQueries.getOfficeInfoQuery, [tableName]);
        case 7:
          result = _context2.sent;
          res.json(result);
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error("Error al obtener la información de la oficina:", _context2.t0);
          res.status(500).json({
            message: "Error al obtener la información de la oficina"
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function getOfficeInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createOffice = exports.createOffice = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var TABLE_NAME, connection, query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          TABLE_NAME = req.body.TABLE_NAME;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context3.sent;
          query = _index.officesQueries.createOfficeQuery + "".concat(TABLE_NAME) + _index.officesQueries.createOfficeContent;
          _context3.next = 8;
          return connection.query(query);
        case 8:
          return _context3.abrupt("return", res.status(201).json({
            msg: "Oficina creada exitosamente"
          }));
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          console.error("Error al crear la oficina:", _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function createOffice(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteOffice = exports.deleteOffice = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var tableName, connection, query;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          tableName = req.params.tableName;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context4.sent;
          query = _index.officesQueries.deleteOfficeQuery + "".concat(tableName);
          _context4.next = 8;
          return connection.query(query);
        case 8:
          return _context4.abrupt("return", res.status(200).json({
            msg: "Oficina eliminada exitosamente"
          }));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.error("Error al eliminar oficina:", _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            message: "Error al eliminar oficina"
          }));
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteOffice(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var insertOfficedata = exports.insertOfficedata = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tableName, _req$body, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, connection, query;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          tableName = req.params.tableName;
          _req$body = req.body, deviceName = _req$body.deviceName, model = _req$body.model, processor = _req$body.processor, typeRAM = _req$body.typeRAM, qRAM = _req$body.qRAM, typeStorage = _req$body.typeStorage, qStorage = _req$body.qStorage, Osystem = _req$body.Osystem, dirIP = _req$body.dirIP, dirMAC = _req$body.dirMAC, plateDevice = _req$body.plateDevice, creation = _req$body.creation, antivirus = _req$body.antivirus, createdby = _req$body.createdby;
          if (!(!deviceName || !model || !processor || !typeRAM || !qRAM || !typeStorage || !qStorage || !Osystem || !dirIP || !dirMAC || !plateDevice || !creation || !antivirus || !createdby)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos están completos."
          }));
        case 6:
          _context5.prev = 6;
          _context5.next = 9;
          return (0, _index.getConnection)();
        case 9:
          connection = _context5.sent;
          query = _index.officesQueries.insertOfficeDataQuery + "".concat(tableName) + _index.officesQueries.insertOfficeDataContentQuery;
          _context5.next = 13;
          return connection.query(query, [deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby]);
        case 13:
          return _context5.abrupt("return", res.status(201).json({
            msg: "Datos insertados correctamente."
          }));
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](6);
          console.error("Error al insertar datos:", _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[6, 16]]);
  }));
  return function insertOfficedata(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();