const express = require("express");
const controller = require("../server/controllers/UserController");
const router = express.Router();
router.post("/user/create", controller.createUser);
module.exports = router;
