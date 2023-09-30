import React, {useState} from 'react';

// Define the InputValidationhoc higher-order component
const InputValidationhoc = Reusecomponents => {
  // Define the reusable input validation logic
  const ResuableInputValidation = () => {
    // State to manage input validation errors
    const [InputErrors, setInputErrors] = useState({
      email: '',
      password: '',
      confirmpassword: '',
    });

    // Function to perform input validation
    const inputValidation = inputData => {
      const errors = {};
      let isValid = true;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

      if (!inputData.email) {
        isValid = false;
        errors.email = 'Field is required!';
      } else if (!emailRegex.test(inputData.email)) {
        isValid = false;
        errors.email = 'Invalid email format!';
      }

      if (!inputData.password) {
        isValid = false;
        errors.password = 'Field is required!';
      } else if (!passwordRegex.test(inputData.password)) {
        isValid = false;
        errors.password =
          'Minimum 8 characters with lowercase, uppercase, digit, and special character.';
      }

      if (!inputData.confirmpassword) {
        isValid = false;
        errors.confirmpassword = 'Field is required!';
      } else if (inputData.confirmpassword !== inputData.password) {
        isValid = false;
        errors.confirmpassword = 'Passwords do not match!';
      }

      // Update the input validation errors state
      setInputErrors({...errors});

      return isValid;
    };

    return (
      <Reusecomponents
        inputValidation={inputValidation}
        InputErrors={InputErrors}></Reusecomponents>
    );
  };

  return ResuableInputValidation;
};

export default InputValidationhoc;
