const express = require("express");
const createAccController = require("../Controller/CreateAccountController");

// Create an Express router
const router = express.Router();

// Define a POST route for user account creation
router.post("/userdata", createAccController.CreateAccountController);

// Export the router to use in your main application
module.exports = router;
