import React, {createContext, useState} from 'react';

// Create a context for Google authentication
export const GoogleAuthContext = createContext({
  UserLoggedIn: false,
  setUserLoggedIn: () => {},
  UserProfileData: [],
  setUserProfileData: () => {},
});

// Create a context provider for Google authentication
export const GoogleAuthProvider = ({children}) => {
  // Initialize state for user authentication and user profile data
  const [UserLoggedIn, setUserLoggedIn] = useState(false);
  const [UserProfileData, setUserProfileData] = useState([]);

  // Define the context value to be provided
  const value = {
    UserLoggedIn, // Current user login status
    setUserLoggedIn, // Function to set user login status
    UserProfileData, // User profile data
    setUserProfileData, // Function to set user profile data
  };

  // Provide the context value to children components
  return (
    <GoogleAuthContext.Provider value={value}>
      {children}
    </GoogleAuthContext.Provider>
  );
};
