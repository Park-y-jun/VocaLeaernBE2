import listRepository from "../database/repositories/listRepository";
import { List } from "../models/List";
import { BadRequest, Unauthorized, Forbidden, NotFound } from "../utils/errors/error";
import { MongoError } from "mongodb";

class listService {
  async newList(list: List) {
    try {
      await listRepository.createList(list);
    } catch (error) {
      // if ((error as MongoError).code === 11000) {
      //   throw new BadRequest("List name must be unique");
      // }
      throw error;
    }
  }

  async findAllListsByUser(userName: string) {
    const user = await listRepository.findOneAndPopulate(userName);
    if (!user) throw new NotFound("User not found");
    return user.lists;
  }
}

export default new listService();