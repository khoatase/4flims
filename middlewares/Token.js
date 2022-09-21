const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_KEY = "token";
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const checkTokenActive = (req, res, next) => {
  const token = req.headers[ACCESS_TOKEN_KEY];
  if (!token) {
    res.status(204).status({
      msg: "Missing token",
    });
  }

  const decode = jwt.verify(token, JWT_PRIVATE_KEY);
  if (decode) {
    req.user = decode;
    next();
  }
};

module.exports = checkTokenActive;
