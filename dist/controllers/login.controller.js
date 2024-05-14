"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var login = exports.login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, igs_user, password_user, connection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, igs_user = _req$body.igs_user, password_user = _req$body.password_user;
          if (!(!igs_user || !password_user)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Por favor proporciona un nombre de usuario y una contraseña válida.",
            result: false
          }));
        case 3:
          _context2.prev = 3;
          connection = (0, _index.getConnection)();
          connection.query(_index.userQueries.login, [igs_user], /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, results) {
              var user, match, token;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!error) {
                      _context.next = 3;
                      break;
                    }
                    console.error("Error al buscar usuario:", error);
                    return _context.abrupt("return", res.status(500).json({
                      message: "Error interno del servidor.",
                      result: false
                    }));
                  case 3:
                    if (!(results.length > 0)) {
                      _context.next = 16;
                      break;
                    }
                    user = results[0];
                    _context.next = 7;
                    return _bcrypt["default"].compare(password_user, user.password_user);
                  case 7:
                    match = _context.sent;
                    if (!match) {
                      _context.next = 13;
                      break;
                    }
                    token = _jsonwebtoken["default"].sign({
                      igs_user: user.igs_user
                    }, process.env.API_KEY, {
                      expiresIn: '1h'
                    });
                    return _context.abrupt("return", res.status(200).json({
                      message: "Login Correcto",
                      result: true,
                      data: {
                        token: token
                      }
                    }));
                  case 13:
                    return _context.abrupt("return", res.status(401).json({
                      message: "Contraseña incorrecta.",
                      result: false
                    }));
                  case 14:
                    _context.next = 17;
                    break;
                  case 16:
                    return _context.abrupt("return", res.status(404).json({
                      message: "Usuario no encontrado.",
                      result: false
                    }));
                  case 17:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          console.error("Error al iniciar sesión:", _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Error interno del servidor.",
            result: false
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 8]]);
  }));
  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();