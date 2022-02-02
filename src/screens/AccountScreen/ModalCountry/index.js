import React from 'react';
import {Picker} from 'react-native';
import {Portal, Modal} from 'react-native-paper';
import styles from './style';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';

export default (ModalCountry = props => {
  return (
    <Portal>
      <Modal
        contentContainerStyle={styles.modalStyle}
        visible={props.visible}
        onDismiss={() => props.setCountryModal(false)}>
        <Picker
          selectedValue={props.country}
          itemStyle={{
            color: colors.black,
            fontFamily: 'Verdana',
            fontSize: fontSize.xl,
          }}
          onValueChange={itemValue => props.setCountry(itemValue)}>
          <Picker.Item label="India" value="India" />
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="Pakistan" value="Pakistan" />
          <Picker.Item label="Nepal" value="Nepal" />
          <Picker.Item label="China" value="China" />
          <Picker.Item label="South Korea" value="South Korea" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="Sri Lanka" value="Sri Lanka" />
          <Picker.Item label="Afghanistan" value="Afghanistan" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Bangladesh" value="Bangladesh" />
          <Picker.Item label="Belgium" value="Belgium" />
          <Picker.Item label="Brazil" value="Brazil" />
          <Picker.Item label="Cambodia" value="Cambodia" />
          <Picker.Item label="South Africa" value="South Africa" />
          <Picker.Item label="Denmark" value="Denmark" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Germany" value="Germany" />
          <Picker.Item label="Yemen" value="Yemen" />
          <Picker.Item label="Vietnam" value="Vietnam" />
          <Picker.Item label="United Kingdom" value="United Kingdom" />
          <Picker.Item label="Ukraine" value="Ukraine" />
          <Picker.Item label="Uganda" value="Uganda" />
          <Picker.Item label="Turkey" value="Turkey" />
          <Picker.Item label="Thailand" value="Thailand" />
          <Picker.Item label="Sweden" value="Sweden" />
        </Picker>
      </Modal>
    </Portal>
  );
});
