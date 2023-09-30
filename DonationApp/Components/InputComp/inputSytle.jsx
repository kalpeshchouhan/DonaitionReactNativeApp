import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  // input
  input: {
    width: '100%',
    height: responsiveHeight(6.8),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#F1F4FF',
    borderStyle: 'solid',
    paddingLeft: 20,
    color: 'black',
  },
  //input error styles
  errorInput: {
    borderWidth: 2,
    borderColor: 'red',
    color: 'red',
  },
});
