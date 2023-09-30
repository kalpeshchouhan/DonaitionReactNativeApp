// Import necessary modules and components
const {StyleSheet} = require('react-native');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// Define a stylesheet using React Native's StyleSheet.create() method
export const styles = StyleSheet.create({
  // Style for the main container
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  // Style for a container that holds text elements
  textContainer: {
    marginTop: responsiveHeight(8),
    width: responsiveWidth(60),
    height: responsiveHeight(15),
  },

  // Style for a container that holds text elements (Singup components)
  singupTextContainer: {
    marginTop: responsiveHeight(8),
    width: responsiveWidth(88),
    height: responsiveHeight(15),
  },

  // Style for the first text element
  textOne: {
    textAlign: 'center',
    color: '#1F41BB',
    fontFamily: 'Helvetica',
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
    lineHeight: 36,
  },

  // Style for the second text element
  textTwo: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: responsiveFontSize(2.9),
    fontWeight: '600',
    lineHeight: 27,
    marginTop: 20,
  },

  // Style for a container view
  viewContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(48),
    marginTop: responsiveHeight(7),
    overflow: 'hidden',
  },

  // Style for input containers
  inputcontainer: {
    width: '100%',
    height: responsiveHeight(21.3),
    justifyContent: 'center',
  },

  // Style for a "forgot password" view
  forgotPassView: {
    width: '100%',
    height: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    alignItems: 'flex-end',
  },

  // Style for the "forgot password" text
  forgotPassText: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    color: '#1F41BB',
  },

  // Style for a buttons view
  buttonsView: {
    flex: 1,
    marginTop: responsiveHeight(3),
    width: '100%',
    overflow: 'hidden',
  },

  // Style for a Google sign-in continer view
  googleButton: {
    width: '40%',
    height: responsiveHeight(11),
    marginTop: responsiveHeight(4),
    overflow: 'hidden',
  },

  // Style for a common text style
  textSyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F41BB',
  },

  // Style for a button container view
  btnView: {
    flex: 1,
    width: '100%',
    marginTop: responsiveHeight(2.5),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
