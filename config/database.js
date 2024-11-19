const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "yigitha4_sequelize",
  "yigitha4_yigithan",
  "2kp4kxE3iufw3HF",
  {
    host: "104.247.165.67",
    dialect:
      "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
