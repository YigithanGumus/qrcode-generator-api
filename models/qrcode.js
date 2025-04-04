const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const QrCode = sequelize.define(
  "QrCode",
  {
    qrCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qrCodeDataURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "qrCodes",
    timestamps: true,
  }
);

module.exports = QrCode;