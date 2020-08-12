"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PersonalNumber_1 = require("./PersonalNumber");
var app = express();
app.get('/pnrcheck/:pnr', function (req, res) {
    var pnr = new PersonalNumber_1.default(req.params['pnr']);
    res.send(pnr.personalNumber);
});
app.listen(8080);
//# sourceMappingURL=index.js.map