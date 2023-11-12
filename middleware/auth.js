const jwt = require("jsonwebtoken");
const key = "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225";

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            status: 401,
            message: "Undefined header",
        });
    }

    const tokenArray = header.split(" ");

    if (tokenArray.length !== 2 || tokenArray[0] !== "Bearer") {
        return res.status(401).json({
            status: 401,
            message: "Invalid token format",
        });
    }

    const token = tokenArray[1];

    try {
        const payload = jwt.verify(token, key);
        req.payload = payload;
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                status: 401,
                message: "Invalid token",
            });
        } else if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                status: 401,
                message: "Token expired",
            });
        } else {
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
            });
        }
    }
};

module.exports = verifyToken;
