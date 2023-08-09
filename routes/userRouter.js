const express = require("express");
const router = express.Router();
const { create, login, logout } = require("../controllers/userController");

router.put("/create", create);
router.post("/login", login);

module.exports = router;
