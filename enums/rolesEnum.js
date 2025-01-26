const { ENUM } = require('sequelize');

const RolesEnum = ENUM('admin', 'user');

module.exports = RolesEnum;
