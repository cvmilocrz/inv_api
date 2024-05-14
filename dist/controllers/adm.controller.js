"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAdmpc = exports.insertAdmOfData = exports.getAdmUinfo = exports.deleteAdmpc = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getAdmUinfo = exports.getAdmUinfo = /*#__PURE__*/function () {
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
          return connection.query(_index.admQueries.getAdmininfoQuery);
        case 6:
          result = _context.sent;
          res.json(result);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            msg: "Error interno del servidor."
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAdmUinfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var insertAdmOfData = exports.insertAdmOfData = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, firstName, lastName, document, position, Adress, phone, email, typepc, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, document = _req$body.document, position = _req$body.position, Adress = _req$body.Adress, phone = _req$body.phone, email = _req$body.email, typepc = _req$body.typepc, deviceName = _req$body.deviceName, model = _req$body.model, processor = _req$body.processor, typeRAM = _req$body.typeRAM, qRAM = _req$body.qRAM, typeStorage = _req$body.typeStorage, qStorage = _req$body.qStorage, Osystem = _req$body.Osystem, dirIP = _req$body.dirIP, dirMAC = _req$body.dirMAC, plateDevice = _req$body.plateDevice, creation = _req$body.creation, antivirus = _req$body.antivirus, createdby = _req$body.createdby;
          if (!(!firstName || !lastName || !document || !position || !Adress || !phone || !email || !typepc || !deviceName || !model || !processor || !typeRAM || !qRAM || !typeStorage || !qStorage || !Osystem || !dirIP || !dirMAC || !plateDevice || !creation || !antivirus || !createdby)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos están completos."
          }));
        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return (0, _index.getConnection)();
        case 8:
          connection = _context2.sent;
          _context2.next = 11;
          return connection.query(_index.admQueries.insertAdmInfoQuery, [firstName, lastName, document, position, Adress, phone, email, typepc, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby]);
        case 11:
          result = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            msg: "Datos insertados correctamente."
          }));
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          console.error("Error al insertar datos:", _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 15]]);
  }));
  return function insertAdmOfData(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteAdmpc = exports.deleteAdmpc = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context3.sent;
          _context3.next = 7;
          return connection.query(_index.admQueries.deleteAdmInfoQuery, [id]);
        case 7:
          result = _context3.sent;
          if (!(result.affectedRows === 0)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "No se encontró ningún equipo con el ID proporcionado"
          }));
        case 10:
          return _context3.abrupt("return", res.status(200).json({
            msg: "Equipo eliminado exitosamente"
          }));
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
          res.status(500).json({
            message: "Error al eliminar equipo"
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return function deleteAdmpc(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateAdmpc = exports.updateAdmpc = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, firstName, lastName, document, position, Adress, phone, email, typepc, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, document = _req$body2.document, position = _req$body2.position, Adress = _req$body2.Adress, phone = _req$body2.phone, email = _req$body2.email, typepc = _req$body2.typepc, deviceName = _req$body2.deviceName, model = _req$body2.model, processor = _req$body2.processor, typeRAM = _req$body2.typeRAM, qRAM = _req$body2.qRAM, typeStorage = _req$body2.typeStorage, qStorage = _req$body2.qStorage, Osystem = _req$body2.Osystem, dirIP = _req$body2.dirIP, dirMAC = _req$body2.dirMAC, plateDevice = _req$body2.plateDevice, creation = _req$body2.creation, antivirus = _req$body2.antivirus, createdby = _req$body2.createdby;
          if (!(!firstName || !lastName || !document || !position || !Adress || !phone || !email || !typepc || !deviceName || !model || !processor || !typeRAM || !qRAM || !typeStorage || !qStorage || !Osystem || !dirIP || !dirMAC || !plateDevice || !creation || !antivirus || !createdby)) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos están completos."
          }));
        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context4.sent;
          _context4.next = 10;
          return connection.query(_index.admQueries.updateAdmpcQuery, [firstName, lastName, document, position, Adress, phone, email, typepc, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, id]);
        case 10:
          result = _context4.sent;
          if (!(result.affectedRows === 0)) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "No se encontró ningún equipo con el ID proporcionado"
          }));
        case 13:
          return _context4.abrupt("return", res.status(200).json({
            msg: "Equipo actualizado exitosamente"
          }));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](4);
          console.error("Error al actualizar datos:", _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 16]]);
  }));
  return function updateAdmpc(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();