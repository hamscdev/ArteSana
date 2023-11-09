const express = require("express");
const app = express.Router();

const { createUser } = require("../controllers/UserController")


app.post("/user/create", createUser);
app.put("/user", (req, resp) => {
    
})


module.exports = app;
