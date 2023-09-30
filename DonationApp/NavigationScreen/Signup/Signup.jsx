import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Button from '../../Components/Button/Button';
import {styles} from '../../CommonStyle/SigninAndSignup';
import Input from '../../Components/InputComp/Input';
import Loader from '../../Components/Loader/Loader';
import {SpinLoaderContext} from '../../Context/SpinLoaderContext';
import CustomeModal from '../../Components/Modal/CustomeModal';
import {ModalContext} from '../../Context/ModalContext';
import GoogleAuth from '../../Components/GoogleAuth/GoogleAuth';
import {GoogleAuthContext} from '../../Context/GoogelAuthContext';
import {CreateAccount} from '../../Service/CreateAccountApi';
import {useNavigation} from '@react-navigation/native';
import InputValidationhoc from '../../Components/HigherOrderComponents/InputValidationhoc';
import {InputDataValidationContext} from '../../Context/InputDataValidationContext';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// Define the Signup component
const Signup = ({inputValidation, InputErrors}) => {
  // Contexts for managing state and data
  const {spinLoader, setspinLoader} = useContext(SpinLoaderContext);
  const {inputData, setinputData} = useContext(InputDataValidationContext);
  const {UserProfileData, setUserProfileData} = useContext(GoogleAuthContext);
  const {modalVisible, setmodalVisible, seterrorsData} =
    useContext(ModalContext);

  // Navigation object
  const navigation = useNavigation();

  // Handle input change
  const handleOnChangeText = (name, value) => {
    setinputData({
      ...inputData,
      [name]: value,
    });
    InputErrors[name] = '';
  };

  // Handle the signup button press
  const handleOnPress = async () => {
    if (inputValidation(inputData)) {
      setspinLoader(true);

      const dataToSend = {
        ...inputData,
        authmethod: 'emailpas',
      };

      try {
        // Call the CreateAccount API
        const response = await CreateAccount(
          dataToSend,
          navigation, // Add your navigation object here
          setmodalVisible,
          seterrorsData,
          setspinLoader,
          setinputData,
        );

        // Handle the response as needed (e.g., navigation)
      } catch (error) {
        // Handle any errors from CreateAccount function
      }
    }
  };

  // Function for handling Google auth
  const handleGoogleAuth = async () => {
    setspinLoader(true);

    const dataToSend = {
      ...UserProfileData,
      authmethod: 'googleauth',
    };

    try {
      // Call the CreateAccount API
      const response = await CreateAccount(
        dataToSend,
        navigation, // Add your navigation object here
        setmodalVisible,
        seterrorsData,
        setspinLoader,
        setinputData,
      );

      // Handle the response as needed (e.g., navigation)
    } catch (error) {
      // Handle any errors from CreateAccount function
    }
  };

  // Render the Signup component UI
  return (
    <View style={styles.container}>
      {/* Conditionally render the Loader */}
      {spinLoader ? <Loader /> : null}
      {/* Conditionally render the modal */}
      {modalVisible ? <CustomeModal /> : null}

      <View style={styles.container}>
        <View style={styles.singupTextContainer}>
          <Text style={styles.textOne}>Create Account</Text>
          <Text style={[styles.textTwo, {fontSize: responsiveFontSize(2.1)}]}>
            Create an account so you can explore all the existing charity
          </Text>
        </View>
        <View
          style={[
            styles.viewContainer,
            {
              height: responsiveHeight(50),
              marginTop: responsiveHeight(4),
            },
          ]}>
          <View style={[styles.inputcontainer, {height: responsiveHeight(29)}]}>
            {/* Input components with placeholders and handlers */}
            <Input
              inputDataValue={inputData}
              error={InputErrors}
              placeholder="Email"
              onChangeText={handleOnChangeText}
              name="email"
            />
            <Input
              inputDataValue={inputData}
              error={InputErrors}
              placeholder="Password"
              onChangeText={handleOnChangeText}
              name="password"
            />
            <Input
              inputDataValue={inputData}
              error={InputErrors}
              placeholder="Confirm Password"
              onChangeText={handleOnChangeText}
              name="confirmpassword"
            />
          </View>
          <View style={styles.buttonsView}>
            {/* Sign Up button component */}
            <Button
              buttontitle="Sign Up"
              buttonType="signin"
              buttonText="singinbtntxt"
              Press={handleOnPress}
            />
            {/* Already Have An Account button component */}
            <Button
              buttontitle="Already Have An Account."
              buttonType="newaccount"
              buttonText="createnewacctxt"
            />
          </View>
        </View>
        <View style={styles.googleButton}>
          <Text style={styles.textSyle}>Or continue with</Text>
          <View style={styles.btnView}>
            {/* Google authentication components */}
            <GoogleAuth handleGoogleAuth={handleGoogleAuth} />
            {/* Social button */}
            <Button buttonType="socialbutton" buttonImg="facebookimg" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InputValidationhoc(Signup); // Export the Signup component
