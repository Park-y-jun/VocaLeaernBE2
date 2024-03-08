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
const userRepository_1 = __importDefault(require("../database/repositories/userRepository"));
const error_1 = require("../utils/errors/error");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class userService {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saltRounds = 10;
                const salt = yield bcrypt_1.default.genSalt(saltRounds);
                const hashedPassword = yield bcrypt_1.default.hash(user.password, salt);
                const newUser = Object.assign(Object.assign({}, user), { password: hashedPassword });
                yield userRepository_1.default.createUser(newUser);
            }
            catch (err) {
                throw err;
            }
        });
    }
    confirmUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCheck = yield userRepository_1.default.findUserByUserName(user.userName);
            if (userCheck === null)
                throw new error_1.Unauthorized("Your action is invalid");
            const passwordCheck = bcrypt_1.default.compareSync(user.password, userCheck.password);
            if (passwordCheck === false)
                throw new error_1.Unauthorized("Your action is invalid");
        });
    }
    accessToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const loggedInUser = yield userRepository_1.default.findUserByUserName(user.userName);
            if (loggedInUser === null)
                throw new error_1.Unauthorized("Your action is invalid");
            const tokenOptions = {
                algorithm: "HS256",
                expiresIn: "6h",
                issuer: "VocaLearnerBE",
            };
            const accessToken = jsonwebtoken_1.default.sign({ key: user.userName }, process.env.JWT_SECRET, tokenOptions);
            const userWithToken = Object.assign(Object.assign({}, loggedInUser.toObject()), { accessToken });
            return userWithToken;
        });
    }
}
exports.default = new userService();
//# sourceMappingURL=userService.js.map