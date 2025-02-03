const User = require('../models/user');
const bcrypt = require('bcrypt');

class UserRepository {
  async createUser(data) {
    const saltRounds = 12; 
    const hashedPassword = await bcrypt.hash(data.password, saltRounds); 
  
    return await User.create({
      ...data, 
      password: hashedPassword, 
    });
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
