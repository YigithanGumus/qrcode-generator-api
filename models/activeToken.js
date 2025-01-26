const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user'); 

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

ActiveToken.belongsTo(User, { foreignKey: 'userId' });

module.exports = ActiveToken; 