const express = require("express");
const bodyParser = require("body-parser");

const homePage=require("./routes/homePage")

const app = express();

const homePage = require("./routes/homePage");
app.use("/homepage", homePage);

const about = require("./routes/about");
app.use("/about", about);

const projects = require("./routes/projects");
app.use("/projects", projects);

const contact = require("./routes/contact");
app.use("/routes/contact.js")


app.listen(5000);

