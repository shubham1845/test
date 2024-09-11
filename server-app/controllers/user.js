//[SECTION] Dependencies and Modules
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../auth");

const { errorHandler } = auth;

module.exports.loginUser = (req, res) => {
  if (req.body.email.includes("@")) {
    return User.findOne({ email: req.body.email })
      .then((result) => {
        if (result == null) {
          // if the email is not found, send a message 'No email found'.
          return res.status(404).send({ message: "No email found" });
        } else {
          const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            result.password
          );
          if (isPasswordCorrect) {
            // if all needed requirements are achieved, send a success message 'User logged in successfully' and return the access token.
            return res.status(200).send({
              message: "User logged in successfully",
              access: auth.createAccessToken(result),
            });
          } else {
            // if the email and password is incorrect, send a message 'Incorrect email or password'.
            return res
              .status(401)
              .send({ message: "Incorrect email or password" });
          }
        }
      })
      .catch((error) => errorHandler(error, req, res));
  } else {
    // if the email used in not in the right format, send a message 'Invalid email format'.
    return res.status(400).send({ message: "Invalid email format" });
  }
};
