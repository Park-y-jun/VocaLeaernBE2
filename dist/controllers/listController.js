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
exports.findAllListsByUser = exports.newList = void 0;
const listService_1 = __importDefault(require("../services/listService"));
const newList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listName, user } = req.body;
        yield listService_1.default.newList({ listName, user });
        res.status(201).json({ message: "Create list was successful." });
    }
    catch (error) {
        next(error);
    }
});
exports.newList = newList;
const findAllListsByUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userKey = req.params.id;
        const lists = yield listService_1.default.findAllListsByUser(userKey);
        res.status(200).json({ data: lists });
    }
    catch (error) {
        next(error);
    }
});
exports.findAllListsByUser = findAllListsByUser;
//# sourceMappingURL=listController.js.map