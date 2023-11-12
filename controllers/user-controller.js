const { User } = require("../models");

const getUserByToken = async (req, res) => {
    try {
        const { id } = req.payload;
        const dataUser = await User.findByPk(id);

        return res.status(200).json({
            status: 200,
            message: "Data user",
            data: dataUser,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama ambil data user",
        });
    }
};

module.exports = { getUserByToken };
