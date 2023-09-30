import React, {memo} from 'react';
import {TextInput} from 'react-native';
import {styles} from './inputSytle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Input = ({inputDataValue, error, placeholder, onChangeText, name}) => {
  return (
    <TextInput
      value={error[name] ? error[name] : inputDataValue[name]}
      style={[
        styles.input,
        name === 'password' || 'confirmpassword'
          ? {marginTop: responsiveHeight(2.7)}
          : null,
        error[name]
          ? styles.errorInput
          : name === 'password' || 'confirmpassword'
          ? {marginTop: responsiveHeight(2.7)}
          : null,
      ]}
      placeholder={placeholder}
      placeholderTextColor={error[name] ? 'red' : 'black'}
      onChangeText={value => onChangeText(name, value)}
    />
  );
};

export default memo(Input);
