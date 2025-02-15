const userRepository = require("../repositories/userRepository");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userRepository.createUser(req.body);
      res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", status: true, user });
    } catch (error) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userRepository.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Kullanıcı bulunamadı" });
      }
      res.status(200).json({ message: "Kullanıcı bulundu", user });
    } catch (error) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userRepository.getAllUsers();
      res.status(200).json({ message: "Tüm kullanıcılar listelendi", users });
    } catch (error) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userRepository.updateUser(req.params.id, req.body);
      res.status(200).json({ message: "Kullanıcı başarıyla güncellendi", user });
    } catch (error) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async deleteUser(req, res) {
    try {
      await userRepository.deleteUser(req.params.id);
      res.status(204).json({ message: "Kullanıcı başarıyla silindi" });
    } catch (error) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}

module.exports = new UserController();
