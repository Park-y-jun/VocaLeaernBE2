import { RequestHandler } from "express";
import userService from "../services/userService";


export const signUp: RequestHandler = async (req, res, next) => {
  try {
  const {id, password} = req.body
  const newUser = await userService.createUser({ userName: id, password });

  res.status(201).json(newUser);
  } catch(error) {
    next(error)
  }
};


export const signIn: RequestHandler = async (req, res, next) => {
  try {
  const { id, password } = req.body;

  await userService.confirmUser({ userName: id, password });
  const loggedInUser = await userService.accessToken({ userName: id, password });
  
  res.status(201).json({ data: loggedInUser });
  } catch(error) {
    next(error)
  }
};
