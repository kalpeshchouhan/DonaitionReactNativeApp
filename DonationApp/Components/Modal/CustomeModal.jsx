import React, {useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {ModalContext} from '../../Context/ModalContext';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

// Define styles for the modal component
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: responsiveWidth(50),
    alignItems: 'center',
  },
  section: {
    width: '100%',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableButton: {
    width: '80%',
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Helvetica',
    fontSize: responsiveScreenFontSize(2.4),
    color: '#1F41BB',
    fontWeight: '600',
  },
  msgText: {
    fontFamily: 'Helvetica',
    fontSize: responsiveFontSize(2.3),
    color: 'black',
  },
});

const CustomModal = () => {
  // Get modal-related state and functions from the context
  const {modalVisible, setmodalVisible, errorsData, seterrorsData} =
    useContext(ModalContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        // setModalVisible(!modalVisible); // Optionally toggle modal visibility
      }}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.section}>
            {/* Display error message */}
            <Text style={styles.msgText}>{errorsData}</Text>
          </View>
          <View style={[styles.section, {justifyContent: 'flex-end'}]}>
            {/* Dismiss button */}
            <Pressable
              onPress={() => {
                // Close the modal and clear the error data
                setmodalVisible(false);
                seterrorsData('');
              }}
              style={styles.pressableButton}>
              <Text style={styles.btnText}>DISMISS</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
