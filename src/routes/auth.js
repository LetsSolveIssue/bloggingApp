const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/userSignUp", authController.signup); //for sign up
router.post('/userSignin', authController.signin); // for sign in

module.exports = router;
