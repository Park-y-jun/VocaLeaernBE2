"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wordController_1 = require("../controllers/wordController");
const router = (0, express_1.Router)();
router.post('/', wordController_1.createWord);
router.get("/list_id/:id", wordController_1.findAllWordsByList);
router.patch("/list_id/:listID/word_id/:wordID", wordController_1.modifyDifficulty);
exports.default = router;
//# sourceMappingURL=wordRoute.js.map