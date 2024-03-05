import { Router } from "express";
import { signUp, signIn } from "../controllers/userController";

const router = Router();
//회원가입
router.post('/sign-up', signUp)

router.post("/sign-in", signIn);

export default router;