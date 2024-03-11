import { Types } from "mongoose";

import { RequestHandler } from "express";
import wordService from "../services/wordService";

export const createWord: RequestHandler = async (req, res, next) => {
  try {
    const { list, question, answer } = req.body;
    await wordService.createWord({ list, question, answer });

    res.status(201).json({ message: "Create word was successful." });
  } catch(error) {
    next(error)
  }
};

export const findAllWordsByList: RequestHandler = async (req, res, next) => {
  try {
    const listId = req.params.id;
    const words = await wordService.findAllWordsByList(listId)

    res.status(201).json({ data: words });
  } catch(error) {
    next(error);
  }
};

export const modifyDifficulty: RequestHandler = async (req, res, next) => {
  try {
    const listID = new Types.ObjectId(req.params.listID);
    const wordID = new Types.ObjectId(req.params.wordID);
    const { difficulty } = req.body;
    await wordService.modifyDifficulty({ listID, wordID, difficulty });
    
    res.status(200).json({ message: "Update Difficulty!" });
  } catch (error) {
    next(error);
  }
};
