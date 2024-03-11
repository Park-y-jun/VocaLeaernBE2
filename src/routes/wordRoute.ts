import { Router } from "express";
import { createWord, findAllWordsByList, modifyDifficulty } from "../controllers/wordController";

const router = Router();

router.post('/', createWord);

router.get("/list_id/:id", findAllWordsByList);

router.patch("/list_id/:listID/word_id/:wordID", modifyDifficulty);

export default router;