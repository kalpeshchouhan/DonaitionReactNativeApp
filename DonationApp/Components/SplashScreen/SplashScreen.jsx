import React, {memo} from 'react';
import {View, Image} from 'react-native';
import {styles} from './SplashScreenStyle';

// SplashScreen component displays a logo during app startup
const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      {/* Container for the logo */}
      <View style={styles.logoContainer}>
        {/* Logo image */}
        <Image
          style={styles.logoImg}
          source={require('../../android/app/src/main/assets/Donationlogo.jpg')}
        />
      </View>
    </View>
  );
};

export default memo(SplashScreen);
