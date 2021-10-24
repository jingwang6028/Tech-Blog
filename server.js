const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
//const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Inform express.js on which template engin to use
app.engine("handlebars", hbs.engine);
app.set("view engin", "handlebars");

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// use public folder as static dirname
app.use(express.static("public"));

//app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
