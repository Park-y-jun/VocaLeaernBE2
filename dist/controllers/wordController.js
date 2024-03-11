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
exports.modifyDifficulty = exports.findAllWordsByList = exports.createWord = void 0;
const mongoose_1 = require("mongoose");
const wordService_1 = __importDefault(require("../services/wordService"));
const createWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { list, question, answer } = req.body;
        yield wordService_1.default.createWord({ list, question, answer });
        res.status(201).json({ message: "Create word was successful." });
    }
    catch (error) {
        next(error);
    }
});
exports.createWord = createWord;
const findAllWordsByList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listId = req.params.id;
        const words = yield wordService_1.default.findAllWordsByList(listId);
        res.status(201).json({ data: words });
    }
    catch (error) {
        next(error);
    }
});
exports.findAllWordsByList = findAllWordsByList;
const modifyDifficulty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listID = new mongoose_1.Types.ObjectId(req.params.listID);
        const wordID = new mongoose_1.Types.ObjectId(req.params.wordID);
        const { difficulty } = req.body;
        yield wordService_1.default.modifyDifficulty({ listID, wordID, difficulty });
        res.status(200).json({ message: "Update Difficulty!" });
    }
    catch (error) {
        next(error);
    }
});
exports.modifyDifficulty = modifyDifficulty;
//# sourceMappingURL=wordController.js.map