import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// Define styles for the splash screen
export const styles = StyleSheet.create({
  // Style for the main container of the splash screen
  splashContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Style for the container that holds the logo
  logoContainer: {
    width: responsiveWidth(85),
    height: responsiveHeight(35),
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Style for the logo image
  logoImg: {
    borderWidth: 2,
    width: responsiveWidth(80),
    height: responsiveHeight(33),
    resizeMode: 'contain',
  },
});
