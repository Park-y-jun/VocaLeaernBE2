"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listController_1 = require("../controllers/listController");
const router = (0, express_1.Router)();
router.post("/", listController_1.newList);
router.get("/user_id/:id", listController_1.findAllListsByUser);
exports.default = router;
//# sourceMappingURL=listRoute.js.map