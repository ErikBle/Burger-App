const express = require("express");
const routes = require("./controllers/controller.js");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);


app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});