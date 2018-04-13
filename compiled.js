"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require("./routes/routes.mjs");

var _routes2 = _interopRequireDefault(_routes);

var _api = require("./routes/api.mjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//import { json, urlencoded } from "body-parser";


app.use(json());
app.use(urlencoded({ extended: true }));

(0, _api.fetchInventory)();
(0, _api.fetchProducts)();
(0, _routes2.default)(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
