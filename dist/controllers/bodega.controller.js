"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePcInStorage = exports.updateMouseInStorage = exports.updateKeyboardInStorage = exports.updateHeadsetInStorage = exports.getPcStorageInfo = exports.getMouseStorageInfo = exports.getMouseInStorageById = exports.getKeyboardStorageInfo = exports.deletePcInStorage = exports.deleteMouseInStorage = exports.deleteKeyboardInStorage = exports.deleteHeadsetInStorage = exports.addPcInStorage = exports.addMouseInStorage = exports.addKeyboardInStorage = exports.addHeadsetStorageInfo = exports.GetHeadsetStorageInfo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
// Rutas para diademas en bodega
var GetHeadsetStorageInfo = exports.GetHeadsetStorageInfo = /*#__PURE__*/function () {
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
          return connection.query(_index.bodegaQueries.getHeadsetStorageInfoQuery);
        case 6:
          result = _context.sent;
          // Utiliza la consulta getHeadsetStorageInfoQuery
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Error al obtener la información de almacenamiento de auriculares:", _context.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function GetHeadsetStorageInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addHeadsetStorageInfo = exports.addHeadsetStorageInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, brand, lote, state_headset, connection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, brand = _req$body.brand, lote = _req$body.lote, state_headset = _req$body.state_headset;
          if (!(!brand || !lote || !state_headset)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'No puedes enviar campos vacíos'
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _index.getConnection)();
        case 6:
          connection = _context2.sent;
          _context2.next = 9;
          return connection.query(_index.bodegaQueries.addHeadsetStorageInfoQuery, [brand, lote, state_headset]);
        case 9:
          return _context2.abrupt("return", res.status(201).json({
            msg: 'Diadema añadida exitosamente'
          }));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          console.error("Error al añadir información de almacenamiento de auriculares:", _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            msg: 'Error interno del servidor'
          }));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return function addHeadsetStorageInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteHeadsetInStorage = exports.deleteHeadsetInStorage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          if (id) {
            _context3.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se ha recibido algún valor'
          });
          return _context3.abrupt("return");
        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context3.sent;
          _context3.next = 10;
          return connection.query(_index.bodegaQueries.deleteHeadsetInStorageQuery, [id]);
        case 10:
          // Utiliza la consulta deleteHeadsetInStorageQuery
          res.status(200).json({
            msg: 'Diadema eliminada exitosamente'
          }); // Usa el código de estado 200 para una respuesta exitosa
          _context3.next = 17;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](4);
          console.error("Error al eliminar la diadema del almacenamiento:", _context3.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 13]]);
  }));
  return function deleteHeadsetInStorage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateHeadsetInStorage = exports.updateHeadsetInStorage = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, brand, lote, state_headset, connection;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, brand = _req$body2.brand, lote = _req$body2.lote, state_headset = _req$body2.state_headset;
          if (!(!brand || !lote || !state_headset)) {
            _context4.next = 5;
            break;
          }
          res.status(400).json({
            msg: 'No se han recibido los valores necesarios'
          });
          return _context4.abrupt("return");
        case 5:
          _context4.prev = 5;
          _context4.next = 8;
          return (0, _index.getConnection)();
        case 8:
          connection = _context4.sent;
          _context4.next = 11;
          return connection.query(_index.bodegaQueries.updateHeadsetInStorageQuery, [brand, lote, state_headset, id]);
        case 11:
          // Utiliza la consulta updateHeadsetInStorageQuery
          res.status(200).json({
            msg: 'Se ha actualizado correctamente'
          }); // Usa el código de estado 200 para una respuesta exitosa
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](5);
          console.error("Error al actualizar la diadema en el almacenamiento:", _context4.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 14]]);
  }));
  return function updateHeadsetInStorage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
// Rutas para teclados en bodega
var getKeyboardStorageInfo = exports.getKeyboardStorageInfo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context5.sent;
          _context5.next = 6;
          return connection.query(_index.bodegaQueries.getKeyboardStorageInfoQuery);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error("Error al obtener la información de almacenamiento de teclados:", _context5.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getKeyboardStorageInfo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var addKeyboardInStorage = exports.addKeyboardInStorage = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, name_keyboard, state_keyboard, connection;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, name_keyboard = _req$body3.name_keyboard, state_keyboard = _req$body3.state_keyboard;
          if (!(!name_keyboard || !state_keyboard)) {
            _context6.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se han recibido los valores necesarios'
          });
          return _context6.abrupt("return");
        case 4:
          _context6.prev = 4;
          _context6.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context6.sent;
          _context6.next = 10;
          return connection.query(_index.bodegaQueries.addKeyboardInStorageQuery, [name_keyboard, state_keyboard]);
        case 10:
          // Utiliza la consulta addKeyboardInStorageQuery
          res.status(201).json({
            msg: 'Se ha insertado correctamente la información'
          });
          _context6.next = 17;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](4);
          console.error("Error al insertar el teclado en el almacenamiento:", _context6.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 13]]);
  }));
  return function addKeyboardInStorage(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteKeyboardInStorage = exports.deleteKeyboardInStorage = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, connection;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          if (id) {
            _context7.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se ha recibido algún valor'
          });
          return _context7.abrupt("return");
        case 4:
          _context7.prev = 4;
          _context7.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context7.sent;
          _context7.next = 10;
          return connection.query(_index.bodegaQueries.deleteKeyboardInStorageQuery, [id]);
        case 10:
          // Utiliza la consulta deleteKeyboardInStorageQuery
          res.status(200).json({
            msg: 'Teclado eliminado exitosamente'
          }); // Usa el código de estado 200 para una respuesta exitosa
          _context7.next = 17;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](4);
          console.error("Error al eliminar el teclado del almacenamiento:", _context7.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[4, 13]]);
  }));
  return function deleteKeyboardInStorage(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var updateKeyboardInStorage = exports.updateKeyboardInStorage = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, _req$body4, name_keyboard, state_keyboard, connection;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _req$body4 = req.body, name_keyboard = _req$body4.name_keyboard, state_keyboard = _req$body4.state_keyboard;
          if (!(!name_keyboard || !state_keyboard)) {
            _context8.next = 5;
            break;
          }
          res.status(400).json({
            msg: 'No se han recibido todos los valores necesarios'
          });
          return _context8.abrupt("return");
        case 5:
          _context8.prev = 5;
          _context8.next = 8;
          return (0, _index.getConnection)();
        case 8:
          connection = _context8.sent;
          _context8.next = 11;
          return connection.query(_index.bodegaQueries.updateKeyboardInStorageQuery, [name_keyboard, state_keyboard, id]);
        case 11:
          res.status(200).json({
            msg: 'Se ha actualizado correctamente'
          });
          _context8.next = 18;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](5);
          console.error("Error al actualizar el teclado en el almacenamiento:", _context8.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[5, 14]]);
  }));
  return function updateKeyboardInStorage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
// Rutas para ratones en bodega
var getMouseStorageInfo = exports.getMouseStorageInfo = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context9.sent;
          _context9.next = 6;
          return connection.query(_index.bodegaQueries.getMouseStorageInfoQuery);
        case 6:
          result = _context9.sent;
          res.json(result.recordset);
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error("Error al obtener la información de almacenamiento del mouse:", _context9.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getMouseStorageInfo(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var addMouseInStorage = exports.addMouseInStorage = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _req$body5, name_mouse, state_mouse, connection;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$body5 = req.body, name_mouse = _req$body5.name_mouse, state_mouse = _req$body5.state_mouse;
          if (!(!name_mouse || !state_mouse)) {
            _context10.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se han recibido los valores necesarios'
          });
          return _context10.abrupt("return");
        case 4:
          _context10.prev = 4;
          _context10.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context10.sent;
          _context10.next = 10;
          return connection.query(_index.bodegaQueries.addMouseInStorageQuery, [name_mouse, state_mouse]);
        case 10:
          res.status(201).json({
            msg: 'Se ha insertado correctamente la información'
          });
          _context10.next = 17;
          break;
        case 13:
          _context10.prev = 13;
          _context10.t0 = _context10["catch"](4);
          console.error("Error al insertar el mouse en el almacenamiento:", _context10.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[4, 13]]);
  }));
  return function addMouseInStorage(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var deleteMouseInStorage = exports.deleteMouseInStorage = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var id, connection;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id;
          if (id) {
            _context11.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se ha recibido algún valor'
          });
          return _context11.abrupt("return");
        case 4:
          _context11.prev = 4;
          _context11.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context11.sent;
          _context11.next = 10;
          return connection.query(_index.bodegaQueries.deleteMouseInStorageQuery, [id]);
        case 10:
          res.status(200).json({
            msg: 'Mouse eliminado exitosamente'
          });
          _context11.next = 17;
          break;
        case 13:
          _context11.prev = 13;
          _context11.t0 = _context11["catch"](4);
          console.error("Error al eliminar el mouse del almacenamiento:", _context11.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 17:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[4, 13]]);
  }));
  return function deleteMouseInStorage(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var updateMouseInStorage = exports.updateMouseInStorage = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var id, _req$body6, name_mouse, state_mouse, connection;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          id = req.params.id;
          _req$body6 = req.body, name_mouse = _req$body6.name_mouse, state_mouse = _req$body6.state_mouse;
          if (!(!name_mouse || !state_mouse)) {
            _context12.next = 5;
            break;
          }
          res.status(400).json({
            msg: 'No se han recibido todos los valores necesarios'
          });
          return _context12.abrupt("return");
        case 5:
          _context12.prev = 5;
          _context12.next = 8;
          return (0, _index.getConnection)();
        case 8:
          connection = _context12.sent;
          _context12.next = 11;
          return connection.query(_index.bodegaQueries.updateMouseInStorageQuery, [name_mouse, state_mouse, id]);
        case 11:
          // Utiliza la consulta updateMouseInStorageQuery
          res.status(200).json({
            msg: 'Se ha actualizado correctamente'
          }); // Usa el código de estado 200 para una respuesta exitosa
          _context12.next = 18;
          break;
        case 14:
          _context12.prev = 14;
          _context12.t0 = _context12["catch"](5);
          console.error("Error al actualizar el mouse en el almacenamiento:", _context12.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[5, 14]]);
  }));
  return function updateMouseInStorage(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var getMouseInStorageById = exports.getMouseInStorageById = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          if (id) {
            _context13.next = 4;
            break;
          }
          res.status(400).json({
            msg: 'No se ha recibido información'
          });
          return _context13.abrupt("return");
        case 4:
          _context13.prev = 4;
          _context13.next = 7;
          return (0, _index.getConnection)();
        case 7:
          connection = _context13.sent;
          _context13.next = 10;
          return connection.query(_index.bodegaQueries.getMouseInStorageByIdQuery, [id]);
        case 10:
          result = _context13.sent;
          res.json(result.recordset);
          _context13.next = 18;
          break;
        case 14:
          _context13.prev = 14;
          _context13.t0 = _context13["catch"](4);
          console.error("Error al obtener la información del mouse en el almacenamiento por ID:", _context13.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 18:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[4, 14]]);
  }));
  return function getMouseInStorageById(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
// Rutas para pc en bodega
var getPcStorageInfo = exports.getPcStorageInfo = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _index.getConnection)();
        case 3:
          connection = _context14.sent;
          _context14.next = 6;
          return connection.query(_index.bodegaQueries.getPcStorageInfoQuery);
        case 6:
          result = _context14.sent;
          // Utiliza la consulta getPcStorageInfoQuery
          res.json(result.recordset);
          _context14.next = 14;
          break;
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](0);
          console.error("Error al obtener la información de almacenamiento de las PC:", _context14.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 10]]);
  }));
  return function getPcStorageInfo(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var addPcInStorage = exports.addPcInStorage = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var _req$body7, deviceName, model, processor, typeRAM, qRAM, type_pc, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, state_pc, connection;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _req$body7 = req.body, deviceName = _req$body7.deviceName, model = _req$body7.model, processor = _req$body7.processor, typeRAM = _req$body7.typeRAM, qRAM = _req$body7.qRAM, type_pc = _req$body7.type_pc, typeStorage = _req$body7.typeStorage, qStorage = _req$body7.qStorage, Osystem = _req$body7.Osystem, dirIP = _req$body7.dirIP, dirMAC = _req$body7.dirMAC, plateDevice = _req$body7.plateDevice, creation = _req$body7.creation, antivirus = _req$body7.antivirus, createdby = _req$body7.createdby, state_pc = _req$body7.state_pc;
          _context15.prev = 1;
          _context15.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context15.sent;
          _context15.next = 7;
          return connection.query(_index.bodegaQueries.addPcInStorageQuery, [deviceName, model, processor, typeRAM, qRAM, type_pc, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, state_pc]);
        case 7:
          res.status(201).json({
            msg: 'Se ha insertado correctamente la información'
          });
          _context15.next = 14;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](1);
          console.error("Error al insertar la información de la PC en el almacenamiento:", _context15.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 10]]);
  }));
  return function addPcInStorage(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var deletePcInStorage = exports.deletePcInStorage = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var id, connection;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          id = req.params.id;
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _index.getConnection)();
        case 4:
          connection = _context16.sent;
          _context16.next = 7;
          return connection.query(_index.bodegaQueries.deletePcInStorageQuery, [id]);
        case 7:
          res.status(200).json({
            msg: 'PC eliminado exitosamente'
          });
          _context16.next = 14;
          break;
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](1);
          console.error("Error al eliminar la PC del almacenamiento:", _context16.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 10]]);
  }));
  return function deletePcInStorage(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var updatePcInStorage = exports.updatePcInStorage = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var id, _req$body8, deviceName, model, processor, typeRAM, qRAM, type_pc, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, state_pc, connection;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          _req$body8 = req.body, deviceName = _req$body8.deviceName, model = _req$body8.model, processor = _req$body8.processor, typeRAM = _req$body8.typeRAM, qRAM = _req$body8.qRAM, type_pc = _req$body8.type_pc, typeStorage = _req$body8.typeStorage, qStorage = _req$body8.qStorage, Osystem = _req$body8.Osystem, dirIP = _req$body8.dirIP, dirMAC = _req$body8.dirMAC, plateDevice = _req$body8.plateDevice, creation = _req$body8.creation, antivirus = _req$body8.antivirus, createdby = _req$body8.createdby, state_pc = _req$body8.state_pc;
          _context17.prev = 2;
          _context17.next = 5;
          return (0, _index.getConnection)();
        case 5:
          connection = _context17.sent;
          _context17.next = 8;
          return connection.query(_index.bodegaQueries.updatePcInStorageQuery, [deviceName, model, processor, typeRAM, qRAM, type_pc, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, state_pc, id]);
        case 8:
          res.status(200).json({
            msg: 'Se ha actualizado correctamente'
          });
          _context17.next = 15;
          break;
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](2);
          console.error("Error al actualizar la información de la PC en el almacenamiento:", _context17.t0);
          res.status(500).json({
            msg: 'Error interno del servidor'
          });
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 11]]);
  }));
  return function updatePcInStorage(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();