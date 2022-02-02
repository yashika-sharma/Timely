import React from 'react';
import {Modal, View, Text, Image} from 'react-native';
import styles from './style';

export default (ModalPopUp = props => {
  return (
    <Modal transparent={true} animationType="slide" visible={props.showModal}>
      <View style={styles.modalView}>
        <Image
          source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/32.png')}
          style={styles.pic}
        />
        <Text style={styles.modalText}>{props.content}</Text>
      </View>
    </Modal>
  );
});
