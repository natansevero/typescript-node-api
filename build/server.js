"use strict";
exports.__esModule = true;
var app_1 = require("./app");
app_1["default"].app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor rodando na porta " + (process.env.PORT || 3000));
});
process.once('SIGUSR2', function () { return app_1["default"].closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return app_1["default"].closeDataBaseConnection('conexão interropida', function () { return process.exit(0); }); });
