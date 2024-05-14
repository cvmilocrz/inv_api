"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = require("dotenv");
var _cors = _interopRequireDefault(require("cors"));
var _usersRoutes = _interopRequireDefault(require("./routes/users.routes.js"));
var _loginRoutes = _interopRequireDefault(require("./routes/login.routes.js"));
var _officesRoutes = _interopRequireDefault(require("./routes/offices.routes.js"));
var _admRoutes = _interopRequireDefault(require("./routes/adm.routes.js"));
var _headsetRoutes = _interopRequireDefault(require("./routes/headset.routes.js"));
var _microservicesRoutes = _interopRequireDefault(require("./routes/microservices.routes.js"));
var _bodegaRoutes = _interopRequireDefault(require("./routes/bodega.routes.js"));
var _process$env$PORT; //importacion de las dependencias
(0, _dotenv.config)();

//importacion de los modulos  de rutas

//variables de la app
var app = (0, _express["default"])();
var port = (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 6000;

//middleware
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());

//rutas
app.use(_usersRoutes["default"]);
app.use(_loginRoutes["default"]);
app.use(_officesRoutes["default"]);
app.use(_admRoutes["default"]);
app.use(_headsetRoutes["default"]);
app.use(_microservicesRoutes["default"]);
app.use(_bodegaRoutes["default"]);

//configuracion del servidor
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/client/index.html');
});
app.listen(port, function () {
  console.log("Servidor corriendo en el puerto: ".concat(port));
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});