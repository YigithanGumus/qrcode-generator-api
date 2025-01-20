const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Veritabanı bağlantınızı ayarlayın
const User = require('./user'); // User modelini içe aktarın

class ActiveToken extends Model {}

ActiveToken.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'ActiveToken',
});

// Kullanıcı ile ilişkiyi tanımlayın
ActiveToken.belongsTo(User, { foreignKey: 'userId' }); // userId ile User modeline bağlanır

module.exports = ActiveToken; 