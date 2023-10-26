const { body } = require("express-validator");

const comparePasswords = (value, { req }) => {
    return req.body.password === req.body.passwordConfirmation;
};

const authValidation = {
    username: body("username")
        .isLength({ min: 3, max: 15 })
        .withMessage("Username length should be from 3 to 15 symbols"),
    password: body("password")
        .isLength({ min: 6, max: 15 })
        .withMessage("Password length should be from 6 to 15 symbols"),
    passwordConfirmation: body("passwordConfirmation")
        .custom(comparePasswords)
        .withMessage("Password confirmation must match the password"),
    email: body("email").isEmail().withMessage("Invalid email"),
};

module.exports = { ...authValidation };
