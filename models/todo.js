"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        static associate(models) {}
    }
    Todo.init(
        {
            user_id: DataTypes.STRING,
            title: DataTypes.STRING,
            is_completed: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Todo",
        }
    );
    return Todo;
};
