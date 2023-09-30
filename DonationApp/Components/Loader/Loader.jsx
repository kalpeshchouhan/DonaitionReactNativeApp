import React, {memo} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

// Define styles for the loader component
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    opacity: 0.5,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});

// Define the Loader component
const Loader = () => {
  return (
    <View style={styles.container}>
      {/* Display an activity indicator */}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

// Memoize the Loader component to optimize rendering
export default memo(Loader);
