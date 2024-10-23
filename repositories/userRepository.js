const User = require('../models/user');

class UserRepository {
  async createUser(data) {
    return await User.create(data);
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return await user.update(data);
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return await user.destroy();
  }
}

module.exports = new UserRepository();
