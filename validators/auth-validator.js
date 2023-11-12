const { body, validationResult } = require("express-validator");

const registerValidationRules = () => {
    return [
        body("name").notEmpty().withMessage("Name tidak boleh kosong"),
        body("email").isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password tidak boleh kosong"),
        body("konfirmasi_password").notEmpty().withMessage("Konfirmasi password tidak boleh kosong"),
    ];
};

const registerValidate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

    return res.status(422).json({
        status: 422,
        message: "Error validasi",
        data: extractedErrors,
    });
};

const loginValidationRules = () => {
    return [body("email").isEmail().withMessage("Email tidak valid"), body("password").notEmpty().withMessage("Password tidak boleh kosong")];
};

const loginValidate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

    return res.status(422).json({
        status: 422,
        message: "Error validasi",
        data: extractedErrors,
    });
};

module.exports = { registerValidationRules, registerValidate, loginValidationRules, loginValidate };
