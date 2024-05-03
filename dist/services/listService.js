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
const listRepository_1 = __importDefault(require("../database/repositories/listRepository"));
const error_1 = require("../utils/errors/error");
class listService {
    newList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield listRepository_1.default.createList(list);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllListsByUser(userKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield listRepository_1.default.findOneAndPopulate(userKey);
            if (!user)
                throw new error_1.NotFound("User not found");
            return user.lists;
        });
    }
}
exports.default = new listService();
//# sourceMappingURL=listService.js.map