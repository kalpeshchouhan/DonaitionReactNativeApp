import React, {memo} from 'react';
import {TouchableHighlight, Text, Image} from 'react-native';
import {styles} from './buttonStyle';

// Define the Button component
const Button = ({
  buttontitle,
  buttonType,
  buttonText,
  buttonImg,
  Press,
  googlePress,
}) => {
  // Button type styles
  const buttons = {
    signin: styles.signInButton,
    newaccount: styles.newAccountButton,
    singinbtntxt: styles.signinButtonText,
    createnewacctxt: styles.createAccButton,
    socialbutton: styles.socialButton,
    googlesocialimg: styles.googleSocialImg,
  };

  // Image path based on buttonImg
  const imageSource =
    buttonImg === 'googlesocialimg'
      ? require('../../android/app/src/main/assets/googleicon.png')
      : buttonImg === 'facebookimg'
      ? require('../../android/app/src/main/assets/facebookicon.png')
      : null;

  return (
    <TouchableHighlight style={buttons[buttonType]} onPress={googlePress}>
      {imageSource ? (
        // Display an image if available
        <Image source={imageSource} />
      ) : (
        // Display text if no image source
        <Text onPress={Press} style={buttons[buttonText]}>
          {buttontitle}
        </Text>
      )}
    </TouchableHighlight>
  );
};

// Memoize the Button component for optimized rendering
export default memo(Button);
