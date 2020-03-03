const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homePage = require("./routes/homePage");
app.use("/", homePage);

const about = require("./routes/about");
app.use("/about", about);

const projects = require("./routes/projects");
app.use("/projects", projects);

const contact = require("./routes/contact");
app.use("/contact", contact)


app.listen(5000);
