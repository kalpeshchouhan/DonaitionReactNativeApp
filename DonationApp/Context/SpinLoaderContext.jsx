import React, {createContext, useState} from 'react';

// Create a context for managing loading spinners
export const SpinLoaderContext = createContext({
  spinLoader: false,
  setspinLoader: () => {},
});

// Create a context provider for managing loading spinners
export const SpinLoaderProvider = ({children}) => {
  // Initialize state for the loading spinner
  const [spinLoader, setspinLoader] = useState(false);

  // Define the context value to be provided
  const value = {
    spinLoader, // Current loading spinner state
    setspinLoader, // Function to set loading spinner state
  };

  // Provide the context value to children components
  return (
    <SpinLoaderContext.Provider value={value}>
      {children}
    </SpinLoaderContext.Provider>
  );
};
