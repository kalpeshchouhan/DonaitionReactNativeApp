import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// Define styles for various button types
export const styles = StyleSheet.create({
  // Style for the Sign-In button
  signInButton: {
    width: '100%',
    height: responsiveHeight(6.8),
    borderRadius: 10,
    backgroundColor: '#1F41BB',
    shadowColor: 'rgba(203, 214, 255, 1.0)',
    elevation: 10,
    shadowOpacity: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Style for the text within the Sign-In button
  signinButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Style for the New Account button
  newAccountButton: {
    flex: 1,
    width: '100%',
    marginTop: responsiveHeight(2.5),
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  // Style for the text within the New Account button
  createAccButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    textAlign: 'center',
    color: '#494949',
  },

  // Style for social buttons (e.g., Google Sign-In)
  socialButton: {
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    width: responsiveWidth(17),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
