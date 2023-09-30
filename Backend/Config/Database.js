const { Sequelize } = require("sequelize");

// Create a Sequelize instance for connecting to the database
const sequelize = new Sequelize("donation_app", "root", "roots", {
  host: "localhost",
  dialect: "mysql",
});

// Export the Sequelize instance for use in other parts of your application
module.exports = sequelize;
