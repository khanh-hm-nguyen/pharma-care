import { User, IUser } from "@/models";

export class UserService {
  // return all users
  static async getAllUsers() {
    const users = await User.find({}).sort({ createdAt: -1 });
    return users;
  }

  // return user by id
  static async getUserById(id: string) {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  // update user
  static async updateUser(id: string, data: Partial<IUser>) {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    return User.findByIdAndUpdate(id, data).lean<IUser>();
  }

  // delete user
  static async deleteUser(id: string) {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
  }
}
