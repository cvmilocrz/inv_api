"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQueries = exports.officesQueries = exports.headsetQueries = exports.bodegaQueries = exports.admQueries = exports.MicroservicesQueries = void 0;
var _dotenv = require("dotenv");
var _process$env$MYSQL_AD;
(0, _dotenv.config)();
var dbName = (_process$env$MYSQL_AD = process.env.MYSQL_ADDON_DB) !== null && _process$env$MYSQL_AD !== void 0 ? _process$env$MYSQL_AD : '';
var userQueries = exports.userQueries = {
  // Queries para usuarios
  getAllUsers: 'SELECT * FROM users',
  createUser: 'INSERT INTO users (igs_user, name_user, password_user, cargo) VALUES (?, ?, ?, ?)',
  getUserById: 'SELECT * FROM users WHERE id = ?',
  deleteUser: 'DELETE FROM users WHERE id = ?',
  updateUsers: 'UPDATE users SET igs_user = ?, name_user = ?, password_user = ?, cargo = ? WHERE id = ?',
  getCargo: 'SELECT cargo FROM users WHERE igs_user = ?',
  // Consulta para login
  login: 'SELECT * FROM users WHERE igs_user = ?'
};
var officesQueries = exports.officesQueries = {
  // Queries para oficinas
  getAllOfficeQuery: "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME LIKE 'of%'",
  getOfficeInfoQuery: 'SELECT * FROM ',
  createOfficeQuery: 'CREATE TABLE ',
  createOfficeContent: ' (id INT AUTO_INCREMENT PRIMARY KEY, deviceName VARCHAR(255), model VARCHAR(255), processor VARCHAR(255), typeRAM INT, qRAM INT, typeStorage INT, qStorage INT, Osystem INT, dirIP VARCHAR(255), dirMAC VARCHAR(255), plateDevice VARCHAR(255), creation DATETIME, antivirus INT, createdby VARCHAR(255))',
  deleteOfficeQuery: 'DROP TABLE ',
  insertOfficeDataQuery: 'INSERT INTO ',
  insertOfficeDataContentQuery: '(deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
};
var admQueries = exports.admQueries = {
  getAdmininfoQuery: 'SELECT * FROM admUsers',
  insertAdmInfoQuery: 'INSERT INTO admUsers (firstName, lastName, document, position, Adress, phone, email, typepc, deviceName, model, processor, typeRAM, qRAM, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  deleteAdmInfoQuery: 'DELETE FROM admUsers WHERE id = ?',
  updateAdmpcQuery: 'UPDATE admUsers SET firstName = ?, lastName = ?,document = ?, position = ?, Adress = ?, phone = ?, email = ?, typepc = ?, deviceName = ?, model = ?, processor = ?, typeRAM = ?, qRAM = ?, typeStorage = ?, qStorage = ?, Osystem = ?, dirIP = ?, dirMAC = ?, plateDevice = ?, creation = ?, antivirus = ?, createdby = ? WHERE id = ?'
};
var bodegaQueries = exports.bodegaQueries = {
  // Queries para diademas
  getHeadsetStorageInfoQuery: 'SELECT * FROM StorageHeadset',
  addHeadsetStorageInfoQuery: 'INSERT INTO StorageHeadset (brand, lote, state_headset) VALUES (?, ?, ?)',
  deleteHeadsetInStorageQuery: 'DELETE FROM StorageHeadset WHERE id = ?',
  updateHeadsetInStorageQuery: 'UPDATE StorageHeadset SET brand = ?, lote = ?, state_headset = ? WHERE id = ?',
  // Queries para teclados
  getKeyboardStorageInfoQuery: 'SELECT * FROM StorageKeyboard',
  addKeyboardInStorageQuery: 'INSERT INTO StorageKeyboard (name_keyboard, state_keyboard) VALUES (?, ?)',
  deleteKeyboardInStorageQuery: 'DELETE FROM StorageKeyboard WHERE id = ?',
  updateKeyboardInStorageQuery: 'UPDATE StorageKeyboard SET name_keyboard = ?, state_keyboard = ? WHERE id = ?',
  // Queries para mouse
  getMouseStorageInfoQuery: 'SELECT * FROM StorageMouse',
  addMouseInStorageQuery: 'INSERT INTO StorageMouse (name_mouse, state_mouse) VALUES (?, ?)',
  deleteMouseInStorageQuery: 'DELETE FROM StorageMouse WHERE id = ?',
  updateMouseInStorageQuery: 'UPDATE StorageMouse SET name_mouse = ?, state_mouse = ? WHERE id = ?',
  getMouseInStorageByIdQuery: 'SELECT * FROM StorageMouse WHERE id = ?',
  // Queries para equipos en bodega
  getPcStorageInfoQuery: 'SELECT * FROM StoragePc',
  addPcInStorageQuery: 'INSERT INTO StoragePc (deviceName, model, processor, typeRAM, qRAM, type_pc, typeStorage, qStorage, Osystem, dirIP, dirMAC, plateDevice, creation, antivirus, createdby, state_pc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  deletePcInStorageQuery: 'DELETE FROM StoragePc WHERE id = ?',
  updatePcInStorageQuery: ' UPDATE StoragePc SET deviceName = ?, model = ?, processor = ?, typeRAM = ?, qRAM = ?, type_pc = ?, typeStorage = ?, qStorage = ?, Osystem = ?, dirIP = ?, dirMAC = ?, plateDevice = ?, creation = ?, antivirus = ?, createdby = ?, state_pc = ? WHERE id = ?'
};
var headsetQueries = exports.headsetQueries = {
  addHeadsetInfoQuery: 'INSERT INTO usersHeadset (lote, firstName, lastName, doc, campaing, model, creation, createdby) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
  addHeadsetFileQuery: 'INSERT INTO igs_files (doc, igsfile) VALUES (?, ?)',
  updateHeadserInfQuery: 'UPDATE usersHeadset SET lote = ?, firstName = ?, lastName = ?, doc = ?, campaing = ?, model = ?, creation = ?,  createdby = ? WHERE id = ?',
  getHeadsetinfoQuery: 'SELECT * FROM usersHeadset',
  deleteHeadsetInfoQuery: 'DELETE FROM usersHeadset WHERE id = ?',
  getHeadsetFileQuery: 'SELECT igsfile FROM igs_files WHERE doc = ?',
  deleteHeadsetFileQuery: 'DELETE FROM igs_files WHERE doc = ?'
};
var MicroservicesQueries = exports.MicroservicesQueries = {
  totalusersQuery: 'SELECT COUNT(*) AS total FROM users',
  totalofficesQuery: "SELECT COUNT(TABLE_NAME) AS tablas FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ".concat(dbName, " AND TABLE_NAME LIKE 'OF%';"),
  totalequiposQuery: 'SELECT COUNT(*) AS equipos FROM admUsers',
  totaldiademasQuery: 'SELECT COUNT(*) AS diademas FROM usersHeadset',
  totaldiademasBodegaQuery: 'SELECT COUNT(*) AS total FROM StorageHeadset;',
  totaltecladosBodegaQuery: 'SELECT COUNT(*) AS total FROM StorageKeyboard;',
  totalratonesBodegaQuery: 'SELECT COUNT(*) AS total FROM StorageMouse;',
  totalpcBodegaQuery: 'SELECT COUNT(*) AS total FROM StoragePc;'
};