"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = require("../utils/errors/error");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            next(new error_1.Unauthorized("invalid_authorization"));
        }
        const [bearer, token] = authorization.split(" ");
        const bearerSet = new Set(["Bearer", "bearer", "BEARER"]);
        if (!bearerSet.has(bearer)) {
            next(new error_1.Unauthorized("invalid_bearer"));
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (typeof decoded === "string") {
            next(new error_1.Unauthorized("Invalid token format"));
        }
        else {
            req.user = decoded;
        }
        next();
    }
    catch (err) {
        if (err instanceof Error && err.name === "TokenExpiredError") {
            next(new error_1.Unauthorized("Token Expired"));
        }
        else {
            next(new error_1.Unauthorized("invalid_credentials"));
        }
    }
});
exports.verifyToken = verifyToken;
