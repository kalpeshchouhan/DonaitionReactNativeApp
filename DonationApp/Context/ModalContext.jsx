import React, {useState, createContext} from 'react';

// Create a context for modals and error data
export const ModalContext = createContext({
  modalVisible: false,
  setmodalVisible: () => {},
  errorsData: '',
  seterrorsData: () => {},
});

// Create a context provider for modals and error data
export const ModalProvider = ({children}) => {
  // Initialize state for modal visibility and error data
  const [modalVisible, setmodalVisible] = useState(false);
  const [errorsData, seterrorsData] = useState('');

  // Define the context value to be provided
  const value = {
    modalVisible, // Current modal visibility state
    setmodalVisible, // Function to set modal visibility state
    errorsData, // Current error data state
    seterrorsData, // Function to set error data state
  };

  // Provide the context value to children components
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
