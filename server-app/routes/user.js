//[SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");
const auth = require("../auth");
//Google Login
const passport = require("passport");

const { verify, isLoggedIn } = auth;

//[SECTION] Routing Component
const router = express.Router();

//[SECTION] Route for user authentication
router.post("/login", userController.loginUser);

//[SECTION] Export Route System
module.exports = router;
