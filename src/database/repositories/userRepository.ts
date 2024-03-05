import {User, UserModel} from '../../models/User'

class UserRepository {
  async createUser(user: User) {
    const newUser = new UserModel({
      userName: user.userName,
      password: user.password,
    });

    return await newUser.save();
  }

  async findUserByUserName(userName: string) {
    const user = await UserModel.findOne({ userName });
    return user;
  }
}

export default new UserRepository();