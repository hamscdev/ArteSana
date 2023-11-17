const express = require("express");
const app = express.Router();

const { createUser } = require("../controllers/UserController")


app.post("/user/create", createUser);
app.put("/user", )


module.exports = app;
