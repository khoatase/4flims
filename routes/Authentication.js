const express = require("express");
const jwt = require("jsonwebtoken");
const checkUserExist = require("../controllers/UserController");
const router = express.Router();

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

console.log(JWT_PRIVATE_KEY);
router.post("/login", (req, res) => {

  const { username, password } = req.body;
  const flagCheckUserExist = checkUserExist({ username, password });
  if (flagCheckUserExist) {
    const token = jwt.sign(
      {
        username,
        password,
      },
      JWT_PRIVATE_KEY,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.status(200).json({
      msg: "Login SuccessFully",
      infoUser: {
        token,
        username,
        password,
      },
    });
  } else {
    res.json(400).json({
      msg: "Wrong username password",
    });
  }
});

router.post("/logout", (req, res) => {});

module.exports = router;
