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
const List_1 = require("../../models/List");
const User_1 = require("../../models/User");
class ListRepository {
    createList(list) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newList = new List_1.ListModel({ listName: list.listName, user: list.user });
            yield newList.save();
            const user = yield User_1.UserModel.findById(list.user);
            if (user) {
                (_a = user.lists) === null || _a === void 0 ? void 0 : _a.push(newList._id);
                yield user.save();
            }
        });
    }
    findOneAndPopulate(userKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.UserModel.findOne({ _id: userKey }).populate("lists");
        });
    }
}
exports.default = new ListRepository();
//# sourceMappingURL=listRepository.js.map