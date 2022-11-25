const express = require("express");
const router = express.Router();

const { loginUser } = require("../controlees/authController");

router.post("/", loginUser);

module.exports = router;
