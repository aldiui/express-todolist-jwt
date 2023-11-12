"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        const salt = bcrypt.genSaltSync();
        const hashPassword = bcrypt.hashSync("11221122", salt);
        return queryInterface.bulkInsert("Users", [
            {
                name: "Coba",
                email: "coba@gmail.com",
                password: hashPassword,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
