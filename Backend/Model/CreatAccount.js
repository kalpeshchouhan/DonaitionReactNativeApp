const Sequelize = require("sequelize");
const sequelize = require("../Config/Database");

// Define a Sequelize model for the "user_accounts_info" table
const User = sequelize.define(
  "user_accounts_info",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    confirmpassword: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    authmethod: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    googleid: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    profilepictureurl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    // Disable automatic pluralization of table names
    freezeTableName: true,
  }
);

// Export the User model for use in other parts of your application
module.exports = User;
