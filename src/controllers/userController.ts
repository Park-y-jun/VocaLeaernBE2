import { RequestHandler } from "express";
import userService from "../services/userService";

export const signUp: RequestHandler = async (req, res, next) => {
  try {
  const {id, password} = req.body
  await userService.createUser({ userName: id, password});
  
  res.status(201).json({ message: "Sign-up was successful." });
  } catch(error) {
    next(error)
  }
};


export const signIn: RequestHandler = async (req, res, next) => {
  try {
  const { id, password } = req.body;
  await userService.confirmUser({ userName: id, password });
  const loggedInUser = await userService.accessToken({ userName: id, password });
  
  res.status(200).json({ data: loggedInUser });
  } catch(error) {
    next(error)
  }
};
