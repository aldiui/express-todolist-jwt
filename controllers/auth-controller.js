const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, konfirmasi_password } = req.body;

        const checkEmail = await User.findOne({ where: { email } });
        if (checkEmail) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Email anda sudah terdaftar",
            });
        }

        if (password !== konfirmasi_password) {
            return res.status(400).json({
                status: 400,
                message: "Password dan Konfirmasi Password tidak cocok",
            });
        }

        const salt = bcrypt.genSaltSync();
        const hashPassword = bcrypt.hashSync(password, salt);

        const register = await User.create({ name, email, password: hashPassword });
        res.status(201).json({
            status: 201,
            message: "Registrasi anda berhasil",
            data: register,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama registrasi",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        console.log(process.env.JWT_SECRET);
        const checkEmail = await User.findOne({ where: { email: req.body.email } });
        if (!checkEmail) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Email anda tidak terdaftar",
            });
        }

        const matchPassword = bcrypt.compareSync(req.body.password, checkEmail.password);
        if (!matchPassword) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Password anda salah",
            });
        }

        const accessToken = jwt.sign({ id: checkEmail.id, email: checkEmail.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({
            status: 200,
            message: "Login anda berhasil",
            data: checkEmail,
            token: accessToken,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama login",
        });
    }
};

const logoutUser = (req, res) => {
    try {
        const { id, email } = req.payload;
        const invalidatedToken = jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1s" });

        return res.status(200).json({
            status: 200,
            message: "Logout anda berhasil",
            invalidatedToken: invalidatedToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama logout",
        });
    }
};

module.exports = { registerUser, loginUser, logoutUser };
