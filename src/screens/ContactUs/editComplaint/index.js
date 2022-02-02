import React, {useEffect, useState} from 'react';
import {Text, View, Alert, TextInput} from 'react-native';
import styles from './style';
import colors from '../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import parentStyle from '../style';
import {connect} from 'react-redux';
import {editComplaint} from '../../../redux/actions/actions';

const EditComplaintScreen = ({route, navigation, editComplaint, error}) => {
  const [editComplaintText, setEditComplaintText] = useState(
    route.params.complaint,
  );
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons.Button
          name="checkmark-outline"
          size={30}
          backgroundColor={colors.base}
          onPress={handleEdit}
          color={colors.popUpBase}
        />
      ),
      headerLeft: () => (
        <Ionicons.Button
          name="close-outline"
          size={30}
          backgroundColor={colors.base}
          onPress={handleBack}
          color={colors.popUpBase}
        />
      ),
    });
  }, [editComplaintText]);

  const handleEdit = () => {
    if (editComplaintText !== '' && /(?!^\d+$)^.+$/.test(editComplaintText)) {
      editComplaint(route.params.createdAt, editComplaintText);
      setEditComplaintText('');
      navigation.goBack();
    } else {
      setInputError('invalid input');
    }
  };

  const handleBack = () => {
    if (route.params.complaint !== editComplaintText) {
      Alert.alert(
        'Alert',
        'You have unsaved changes. Are you sure you want to cancel?',
        [
          {
            text: 'Yes',
            onPress: () => navigation.goBack(),
            style: 'cancel',
          },
          {text: 'No', onPress: () => console.log('Pressed no')},
        ],
        {cancelable: false},
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={parentStyle.container}>
      <TextInput
        value={editComplaintText}
        multiline={true}
        style={styles.inputField}
        onChangeText={text => setEditComplaintText(text)}
      />
      {error ? <Text style={parentStyle.error}>{error}</Text> : null}
      {inputError ? <Text style={parentStyle.error}>{inputError}</Text> : null}
    </View>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  editComplaint: (createdAt, complaint) =>
    dispatch(editComplaint(createdAt, complaint)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditComplaintScreen);
