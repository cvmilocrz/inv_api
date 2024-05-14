"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsers = exports.getUsers = exports.getUserCargo = exports.getAllUsers = exports.deleteUsers = exports.createUsers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var getUsers = exports.getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.body.id;
          if (id) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            msg: "Por favor proporciona un ID válido."
          }));
        case 3:
          _context.prev = 3;
          _context.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context.sent;
          _context.next = 9;
          return connection.query(_index.userQueries.getUserById, [id]);
        case 9:
          result = _context.sent;
          if (!(result.length > 0)) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(200).json(result[0]));
        case 14:
          return _context.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 15:
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](3);
          console.error("Error al obtener usuario:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 17]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllUsers = exports.getAllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context2.sent;
          _context2.next = 6;
          return connection.query(_index.userQueries.getAllUsers);
        case 6:
          result = _context2.sent;
          res.json(result);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getAllUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createUsers = exports.createUsers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, igs_user, name_user, password_user, cargo, hashedPassword, connection, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, igs_user = _req$body.igs_user, name_user = _req$body.name_user, password_user = _req$body.password_user, cargo = _req$body.cargo; // Verifica si algún campo está vacío
          if (!(!igs_user || !name_user || !password_user || !cargo)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos están completos."
          }));
        case 5:
          _context3.prev = 5;
          _context3.next = 8;
          return _bcrypt["default"].hash(password_user, 10);
        case 8:
          hashedPassword = _context3.sent;
          _context3.next = 11;
          return (0, _index.getConnection)();
        case 11:
          connection = _context3.sent;
          _context3.next = 14;
          return connection.query(_index.userQueries.createUser, [igs_user, name_user, hashedPassword, cargo]);
        case 14:
          result = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            msg: "Usuario creado exitosamente."
          }));
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](5);
          console.error("Error al crear usuario:", _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 18]]);
  }));
  return function createUsers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUsers = exports.deleteUsers = /*#__PURE__*/function () {
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
          return connection.query(_index.userQueries.deleteUser, [id]);
        case 9:
          result = _context4.sent;
          if (!(result.affectedRows > 0)) {
            _context4.next = 14;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            msg: "Usuario eliminado exitosamente."
          }));
        case 14:
          return _context4.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 15:
          _context4.next = 21;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](3);
          console.error("Error al eliminar usuario:", _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 17]]);
  }));
  return function deleteUsers(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUsers = exports.updateUsers = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, igs_user, name_user, password_user, cargo, hashedPassword, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, igs_user = _req$body2.igs_user, name_user = _req$body2.name_user, password_user = _req$body2.password_user, cargo = _req$body2.cargo;
          if (!(!id || !igs_user || !name_user || !password_user || !cargo)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: "No se permiten campos vacíos. Asegúrate de que todos los campos estén completos."
          }));
        case 4:
          _context5.prev = 4;
          _context5.next = 7;
          return _bcrypt["default"].hash(password_user, 10);
        case 7:
          hashedPassword = _context5.sent;
          _context5.next = 10;
          return (0, _index.getConnection)();
        case 10:
          connection = _context5.sent;
          _context5.next = 13;
          return connection.query(_index.userQueries.updateUsers, [igs_user, name_user, hashedPassword, cargo, id]);
        case 13:
          result = _context5.sent;
          if (!(result.affectedRows === 0)) {
            _context5.next = 16;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 16:
          return _context5.abrupt("return", res.status(200).json({
            msg: "Usuario actualizado exitosamente."
          }));
        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](4);
          console.error("Error al actualizar usuario:", _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[4, 19]]);
  }));
  return function updateUsers(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getUserCargo = exports.getUserCargo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var igs_user, connection, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          igs_user = req.query.igs_user;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context6.sent;
          _context6.next = 7;
          return connection.query(_index.userQueries.getCargo, [igs_user]);
        case 7:
          result = _context6.sent;
          if (!(result.length > 0)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(200).json(result[0]));
        case 12:
          return _context6.abrupt("return", res.status(404).json({
            msg: "Usuario no encontrado."
          }));
        case 13:
          _context6.next = 19;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](1);
          console.error("Error al obtener usuario:", _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 15]]);
  }));
  return function getUserCargo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();