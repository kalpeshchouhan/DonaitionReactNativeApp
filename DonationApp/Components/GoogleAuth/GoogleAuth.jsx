import React, {useEffect, useContext} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Button from '../Button/Button';
import {GoogleAuthContext} from '../../Context/GoogelAuthContext';

// Define the GoogleAuth component
const GoogleAuth = ({handleGoogleAuth}) => {
  // Get user profile data and related functions from the context
  const {setUserProfileData, UserProfileData} = useContext(GoogleAuthContext);

  // Function to handle Google Sign-In
  const signIn = async () => {
    try {
      console.log('Attempting Google Sign-In');
      await GoogleSignin.hasPlayServices();
      console.log('middle part');
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In successful');
      console.log('userprofile set successfully');
      setUserProfileData(userInfo.user); // Update user profile data

      // Call handleGoogleAuth when Google Sign-In is successful
      if (UserProfileData) {
        handleGoogleAuth();
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
      console.log('Error details:', error.message, error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.error('Other error:', error);
      }
    }
  };

  // Initialize Google Sign-In configuration on component mount
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <Button
      googlePress={signIn}
      buttonType="socialbutton"
      buttonImg="googlesocialimg"
    />
  );
};

export default GoogleAuth;
