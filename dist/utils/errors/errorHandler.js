"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const error_1 = require("./error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof error_1.BadRequest || err instanceof error_1.Unauthorized || err instanceof error_1.Forbidden || err instanceof error_1.NotFound) {
        res.status(err.statusCode).json({ description: err.message });
    }
    else {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.errorHandler = errorHandler;
