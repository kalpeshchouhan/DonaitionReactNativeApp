import React, {createContext, useState} from 'react';

// Create a context for input data validation
export const InputDataValidationContext = createContext({
  inputData: {},
  setinputData: () => {},
});

// Create a context provider for input data validation
export const InputDataValidationProvider = ({children}) => {
  // Initialize state for input data
  const [inputData, setinputData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  // Define the context value to be provided
  const value = {
    inputData, // Current input data state
    setinputData, // Function to set input data state
  };

  // Provide the context value to children components
  return (
    <InputDataValidationContext.Provider value={value}>
      {children}
    </InputDataValidationContext.Provider>
  );
};
