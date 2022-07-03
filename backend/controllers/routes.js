const router = require("express").Router();
var express = require('express');
const conn = require("./dbConnection");
const { body } = require("express-validator");
const { register } = require("./controllers/registerController");
const { login } = require("./controllers/loginController");
const { resetPassword } = require("./controllers/forgotController");


const path = require('path');

router.get("/isAuth", authentication, (req, res) => {
  res.send({ login: true, msg: "done" });
});

router.post(
  "/register",
  [
    body("user_name", "The name must be of minimum 1 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 1 }),

    body("user_email", "Invalid email address")
      .notEmpty()
      .escape()
      .trim()
      .isEmail(),

    body("user_password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),

    body("user_contact", "The number must be of minimum 10 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 10 }),

    body("user_address", "enter your address").notEmpty().escape().trim(),
  ],
  register
);

router.post(
  "/login",
  [
    body("user_email", "Invalid email address")
      .notEmpty()
      .escape()
      .trim()
      .isEmail(),

    body("user_password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  login
);

router.get("/getuser", authentication);

router.post(
  "/resetPassword",
  [
    body("user_email", "Invalid email address")
      .notEmpty()
      .escape()
      .trim()
      .isEmail(),
  ],
  resetPassword
);

router.post(
  "/updatePassword",
  [
    body("resetToken", "Invalid Token").notEmpty().isLength({ min: 4 }),

    body("user_password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  updatePassword
);
module.exports = router;
