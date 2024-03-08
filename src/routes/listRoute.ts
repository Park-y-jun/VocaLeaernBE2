import { Router } from "express";
import { newList, findAllListsByUser } from "../controllers/listController";

const router = Router();

router.post("/", newList);

router.get("/user_id/:id", findAllListsByUser);

export default router;