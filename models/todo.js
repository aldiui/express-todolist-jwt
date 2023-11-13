const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        static associate(models) {
            Todo.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
        }
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
