const { Todo } = require("../models");

const getAllTodo = async (req, res) => {
    try {
        const { id } = req.payload;
        const dataTodo = await Todo.findAll({ where: { user_id: id }, order: [["createdAt", "DESC"]] });

        res.status(200).json({
            status: 200,
            message: "Data todo",
            data: dataTodo,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

const getTodoById = async (req, res) => {
    try {
        const dataTodo = await Todo.findOne({ where: { id: req.params.id, user_id: id } });

        res.status(200).json({
            status: 200,
            message: "Detail data todo",
            data: dataTodo,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

const createTodo = async (req, res) => {
    try {
        const { id } = req.payload;
        const { title, is_completed } = req.body;

        const dataTodo = await Todo.create({ title, user_id: id, is_completed: is_completed ?? 0 });
        res.status(201).json({
            status: 201,
            message: "Todo anda berhasil dibuat",
            data: dataTodo,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.payload;
        const { title, is_completed } = req.body;

        await Todo.update(
            { title, user_id: id, is_completed },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({
            status: 200,
            message: "Todo anda berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.payload;
        await Todo.destroy({ where: { id: req.params.id, user_id: id } });
        res.status(200).json({
            status: 200,
            message: "Todo anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

const deleteAllTodo = async (req, res) => {
    try {
        const { id } = req.payload;
        await Todo.destroy({ where: { user_id: id } });
        res.status(200).json({
            status: 200,
            message: "Todo anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal pada todo",
        });
    }
};

module.exports = { getAllTodo, getTodoById, createTodo, updateTodo, deleteTodo, deleteAllTodo };
