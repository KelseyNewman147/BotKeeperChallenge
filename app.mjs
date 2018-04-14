import express from "express";
import bodyParser from "body-parser";
const {json} = bodyParser;
const {urlencoded} = bodyParser;
import routes from "./routes/routes.mjs";
import { fetchInventory, fetchProducts } from "./routes/api.mjs";
var app = express();

app.use(json());
app.use(urlencoded({ extended: true}));
fetchInventory();
fetchProducts();
routes(app);

var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});