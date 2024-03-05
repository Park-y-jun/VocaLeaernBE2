"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
//회원가입
router.post('/sign-up', userController_1.signUp);
router.post("/sign-in", userController_1.signIn);
exports.default = router;
