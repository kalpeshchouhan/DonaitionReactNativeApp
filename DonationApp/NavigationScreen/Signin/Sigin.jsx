import React from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from '../../CommonStyle/SigninAndSignup';
import Button from '../../Components/Button/Button';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import GoogleAuth from '../../Components/GoogleAuth/GoogleAuth';

const Sigin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textOne}>Login here</Text>
        <Text style={styles.textTwo}>Welcome back you’ve been missed!</Text>
      </View>
      <View style={styles.viewContainer}>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'black'}
          />
          <TextInput
            style={{...styles.input, marginTop: responsiveHeight(2.7)}}
            placeholder="Password"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.forgotPassView}>
          <Text style={styles.forgotPassText}>Forgot Your Password?</Text>
        </View>
        <View style={styles.buttonsView}>
          <Button
            buttontitle="Sign In"
            buttonType="signin"
            buttonText="singinbtntxt"
          />
          <Button
            Press={() => navigation.navigate('Signup')}
            buttontitle="Create New Account"
            buttonType="newaccount"
            buttonText="createnewacctxt"
          />
        </View>
      </View>
      <View style={styles.googleButton}>
        <Text style={styles.textSyle}>Or continue with</Text>
        <View style={styles.btnView}>
          <GoogleAuth />
          <Button buttonType="socialbutton" buttonImg="facebookimg" />
        </View>
      </View>
    </View>
  );
};

export default Sigin;
