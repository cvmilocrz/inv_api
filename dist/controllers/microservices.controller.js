"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalusers = exports.totaltecladosBodega = exports.totalratonesBodega = exports.totalpcBodega = exports.totaloffices = exports.totalequipos = exports.totaldiademasBodega = exports.totaldiademas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var totalusers = exports.totalusers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query(_index.MicroservicesQueries.totalusersQuery);
        case 6:
          result = _context.sent;
          // Utiliza la consulta totalusersQuery
          total = result[0].total;
          res.json({
            total: total
          });
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Error al obtener el total de usuarios:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function totalusers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var totaloffices = exports.totaloffices = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context2.sent;
          _context2.next = 6;
          return connection.query(_index.MicroservicesQueries.totalofficesQuery);
        case 6:
          result = _context2.sent;
          // Utiliza la consulta totalofficesQuery
          total = result[0].tablas;
          res.json({
            total: total
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Error al obtener el total de oficinas:", _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function totaloffices(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var totalequipos = exports.totalequipos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context3.sent;
          _context3.next = 6;
          return connection.query(_index.MicroservicesQueries.totalequiposQuery);
        case 6:
          result = _context3.sent;
          // Utiliza la consulta totalequiposQuery
          total = result[0].equipos;
          res.json({
            total: total
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error("Error al obtener el total de equipos:", _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function totalequipos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var totaldiademas = exports.totaldiademas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context4.sent;
          _context4.next = 6;
          return connection.query(_index.MicroservicesQueries.totaldiademasQuery);
        case 6:
          result = _context4.sent;
          total = result[0].diademas;
          res.json({
            total: total
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.error("Error al obtener el total de diademas:", _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function totaldiademas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var totaldiademasBodega = exports.totaldiademasBodega = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context5.sent;
          _context5.next = 6;
          return connection.query(_index.MicroservicesQueries.totaldiademasBodegaQuery);
        case 6:
          result = _context5.sent;
          total = result[0].total;
          res.json({
            total: total
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error("Error al obtener el total de diademas en bodega:", _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function totaldiademasBodega(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var totaltecladosBodega = exports.totaltecladosBodega = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context6.sent;
          _context6.next = 6;
          return connection.query(_index.MicroservicesQueries.totaltecladosBodegaQuery);
        case 6:
          result = _context6.sent;
          total = result[0].total;
          res.json({
            total: total
          });
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.error("Error al obtener el total de teclados en bodega:", _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function totaltecladosBodega(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var totalratonesBodega = exports.totalratonesBodega = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context7.sent;
          _context7.next = 6;
          return connection.query(_index.MicroservicesQueries.totalratonesBodegaQuery);
        case 6:
          result = _context7.sent;
          total = result[0].total;
          res.json({
            total: total
          });
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          console.error("Error al obtener el total de ratones en bodega:", _context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 11]]);
  }));
  return function totalratonesBodega(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var totalpcBodega = exports.totalpcBodega = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var connection, result, total;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context8.sent;
          _context8.next = 6;
          return connection.query(_index.MicroservicesQueries.totalpcBodegaQuery);
        case 6:
          result = _context8.sent;
          total = result[0].total;
          res.json({
            total: total
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          console.error("Error al obtener el total de PCs en bodega:", _context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            msg: "Error interno del servidor."
          }));
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function totalpcBodega(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();