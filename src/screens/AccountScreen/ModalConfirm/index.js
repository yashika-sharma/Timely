import React from 'react';
import {View, Text} from 'react-native';
import {Portal, Dialog, Paragraph, Button} from 'react-native-paper';
import styles from './style';

export default (ModalCountry = props => {
  return (
    <Portal>
      <Dialog
        visible={props.visible}
        onDismiss={() => props.setVisible(!props.visible)}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph style={styles.message}>
            You have unsaved changed. Are you sure you want to leave?
          </Paragraph>
        </Dialog.Content>
        <View style={styles.actionContainer}>
          <Dialog.Actions>
            <Button onPress={() => props.navigation.goBack()}>
              <Text style={styles.message}>Yes</Text>
            </Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button onPress={() => props.setVisible(!props.visible)}>
              <Text style={styles.message}>NO</Text>
            </Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
});
