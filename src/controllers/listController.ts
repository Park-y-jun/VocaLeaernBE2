import listService from "../services/listService";
import { RequestHandler } from "express";

export const newList: RequestHandler = async (req, res, next) => {
  try {
    const { listName, user} = req.body;
    await listService.newList({ listName, user });

    res.status(201).json({ message: "Create list was successful." });
  } catch (error) {
    next(error);
  }
};

export const findAllListsByUser: RequestHandler = async (req, res, next) => {
  try {
    const userName = req.params.id;
    const lists = await listService.findAllListsByUser(userName);
    
    res.status(201).json({ data: lists });
  } catch(error) {
    next(error);
  }
};