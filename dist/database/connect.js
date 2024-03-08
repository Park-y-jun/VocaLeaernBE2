"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (url) => {
    const connect = () => {
        mongoose_1.default
            .connect(url)
            .then(() => {
            return console.log(`Successfully connected to ${url}`);
        })
            .catch((error) => {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
//# sourceMappingURL=connect.js.map