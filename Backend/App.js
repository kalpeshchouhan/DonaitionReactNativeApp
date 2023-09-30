const express = require("express");
const PORT = 1010;
const sequelize = require("./Config/Database");
const bodyParser = require("body-parser");
const createAccRouter = require("./Routes/CreateAccountRoutes");

const app = express();

// Middleware: Parse incoming JSON data
app.use(bodyParser.json());

// Use the "/createaccount" route for handling user account creation
app.use("/createaccount", createAccRouter);

// Synchronize Sequelize models with the database and start the server
sequelize
  .sync()
  .then(() => {
    console.log("Connected to MySQL and synchronized models");
    app.listen(PORT, () => {
      console.log(`Server is listening on: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
  });
