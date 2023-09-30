import {BaseUrl} from '../Helper/Helper';
import axios from 'axios';

// Handle error functions
const handleApiError = (error, setmodalVisible, seterrorsData) => {
  if (error.response) {
    // The request was made, but the server responded with an error status code
    console.error(
      'Response Error:',
      error.response.status,
      error.response.data,
    );
    if (
      error.response.status === 400 &&
      error.response.data.message === 'Email Already Exists'
    ) {
      setmodalVisible(true);
      seterrorsData(error.response.data.message);
    } else {
      // Handle other server response errors here
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request Error:', error.request);
    // Handle network request errors here
  } else {
    // Something happened in setting up the request that triggered an error
    console.error('Axios Error:', error.message);
    // Handle other Axios-related errors here
  }
};

// Create account function
export const CreateAccount = async (
  userdata,
  navigation,
  setmodalVisible,
  seterrorsData,
  setspinLoader,
  setinputData,
) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/createaccount/userdata`,
      userdata,
    );

    if (response) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    }

    return response.data;
  } catch (error) {
    handleApiError(error, setmodalVisible, seterrorsData);
  } finally {
    // Hide loader after the API request completes (whether success or error) and set the input fields blank
    setTimeout(() => {
      setspinLoader(false);
      setinputData({
        email: '',
        password: '',
        confirmpassword: '',
      });
    }, 2000);
  }
};
