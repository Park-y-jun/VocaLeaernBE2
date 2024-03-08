import {List, ListModel} from '../../models/List'
import { UserModel } from '../../models/User';
import { BadRequest, Unauthorized, Forbidden, NotFound } from "../../utils/errors/error";

class ListRepository {
  async createList(list: List) {
    const newList = new ListModel({ listName: list.listName, userName: list.user });
    await newList.save();

    const user = await UserModel.findById(list.user);
    if (user) {
      user.lists?.push(newList._id);
      await user.save();
    }
  }

  async findOneAndPopulate(userName: string) {
    return await UserModel.findOne({ _id: userName }).populate("lists");
  }
}

export default new ListRepository();