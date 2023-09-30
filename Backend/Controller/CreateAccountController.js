const userAccountInfo = require("../Model/CreatAccount");

// Controller for creating a user account
exports.CreateAccountController = (req, res) => {
  // Destructure the request body to get relevant data
  const { email, password, confirmpassword, authmethod, name, id } = req.body;

  // Check if the email already exists in the database
  userAccountInfo.findAll({ where: { email } }).then((results) => {
    if (results.length > 0) {
      // Email already exists, return a 400 Bad Request response
      res.status(400).json({
        message: "Email Already Exists",
      });
    } else {
      // Email doesn't exist, create a new user account
      userAccountInfo
        .create({
          email,
          password,
          confirmpassword,
          authmethod,
          name,
          googleid: id,
        })
        .then((response) => {
          // User account created successfully
          res.status(201).json({
            message: "User details added successfully",
            data: response,
          });
        })
        .catch((error) => {
          // Handle any errors that occur during account creation
          console.error(`Error occurred while creating account: ${error}`);
          res.status(500).json({
            message: "Error occurred while creating account",
            error: error.message,
          });
        });
    }
  });
};
