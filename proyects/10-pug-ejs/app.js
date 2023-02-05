const express = require("express");
const app = express();
const { Router } = express;
const products = new Router();


app.use( "/productos/form", express.static( __dirname) );
app.set("view engine", "ejs");

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

const listProducts = [];

app.get("/productos", (req, res) => {
    req.query["listProducts"] = listProducts;
    res.render("data", req.query);
});

app.post("/productos/form", (req, res) => {
    listProducts.push( req.body );
    res.redirect("..");
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=> {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

server.on("error", error => console.log(`Error al establecer la conexcion con el servidor ${error}`));