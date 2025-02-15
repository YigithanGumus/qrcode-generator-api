const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "users", 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "İsim alanı boş bırakılamaz",
        },
        len: {
          args: [2, 50],
          msg: "İsim en az 2, en fazla 50 karakter olmalı",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Bu E-Posta mevcuttur",
      },
      validate: {
        isEmail: {
          msg: "Geçersiz e-posta formatı",
        },
        len: {
          args: [5, 255],
          msg: "E-Posta en az 5, en fazla 255 karakter olmalı",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 20],
          msg: "Parola uzunluğu en az 6, en fazla 20 karakter olmalı",
        },
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
