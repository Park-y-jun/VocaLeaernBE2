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
Object.defineProperty(exports, "__esModule", { value: true });
const Word_1 = require("../../models/Word");
const List_1 = require("../../models/List");
class wordRepository {
    createWord(word) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newWord = new Word_1.WordModel({
                list: word.list,
                question: word.question,
                answer: word.answer,
            });
            yield newWord.save();
            const list = yield List_1.ListModel.findById(word.list);
            if (list) {
                (_a = list.words) === null || _a === void 0 ? void 0 : _a.push(newWord._id);
                yield list.save();
            }
        });
    }
    findOneAndPopulate(listId) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDate = new Date();
            return yield List_1.ListModel.findOne({ _id: listId }).populate({
                path: "words",
                match: {
                    $or: [{ nextReviewDate: { $lte: currentDate } }, { difficulty: "INITIAL" }],
                },
                options: { sort: { nextReviewDate: 1 } },
            });
        });
    }
    modifyDifficulty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let updateData = {};
            let currentTime = new Date();
            if (params.difficulty === "EASY") {
                const easyReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 3));
                updateData = {
                    difficulty: "EASY",
                    nextReviewDate: easyReviewDate,
                };
            }
            else if (params.difficulty === "NORMAL") {
                const normalReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 2));
                updateData = {
                    difficulty: "NORMAL",
                    nextReviewDate: normalReviewDate,
                };
            }
            else if (params.difficulty === "HARD") {
                const hardReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 1));
                updateData = {
                    difficulty: "HARD",
                    nextReviewDate: hardReviewDate,
                };
            }
            try {
                const updatedWord = yield Word_1.WordModel.findOneAndUpdate({ _id: params.wordID, list: params.listID }, { $set: updateData }, { new: true });
                return updatedWord;
            }
            catch (error) {
                console.error("Error updating the word difficulty: ", error);
                throw error;
            }
        });
    }
}
exports.default = new wordRepository();
//# sourceMappingURL=wordRepository.js.map