import userRepository from "../database/repositories/userRepository"; 
import { User } from "../models/User";
import { BadRequest, Unauthorized, Forbidden, NotFound} from '../utils/errors/error'

import bcrypt from 'bcrypt'
import jwt, { Algorithm } from "jsonwebtoken";

class userService {
  async createUser(user: User) {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      const newUser = {
        ...user,
        password: hashedPassword,
      };

      return await userRepository.createUser(newUser);
    } catch (err) {
      throw err;
    }
  }

  async confirmUser(user: User) {
    const userCheck = await userRepository.findUserByUserName(user.userName);
    if (userCheck === null) throw new Unauthorized("Your action is invalid");

    const passwordCheck = bcrypt.compareSync(user.password, userCheck.password);
    if (passwordCheck === false) throw new Unauthorized("Your action is invalid");
  }

  async accessToken(user: User) {
    const loggedInUser = await userRepository.findUserByUserName(user.userName);
    if (loggedInUser === null) throw new Unauthorized("Your action is invalid");

    const tokenOptions = {
      algorithm: "HS256" as Algorithm,
      expiresIn: "6h",
      issuer: "VocaLearnerBE",
    };

    const accessToken = jwt.sign({ key: user.userName }, process.env.JWT_SECRET!, tokenOptions);
    const userWithToken = { ...loggedInUser.toObject(), accessToken };

    return userWithToken; 
  }
}

export default new userService();