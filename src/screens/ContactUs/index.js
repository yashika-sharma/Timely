import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {addComplaint, deleteComplaint} from '../../redux/actions/actions';
import ComplaintItem from './complaintItem';
import {useFocusEffect} from '@react-navigation/native';

const ContactUs = ({
  complaints,
  addComplaint,
  error,
  deleteComplaint,
  navigation,
}) => {
  const [complaint, setComplaint] = useState('');
  const [inputError, setInputError] = useState('');

  useFocusEffect(
    useCallback(() => {
      setInputError('');
    }, []),
  );

  const handleAdd = () => {
    if (complaint !== '' && /(?!^\d+$)^.+$/.test(complaint)) {
      addComplaint(complaint);
      setComplaint('');
      setInputError('');
    } else {
      setInputError('Invalid input');
    }
  };
  const handleDelete = createdAt => {
    deleteComplaint(createdAt);
  };

  const handleEdit = (createdAt, complaint) => {
    navigation.navigate('EditComplaint', {
      createdAt: createdAt,
      complaint: complaint,
    });
  };

  const renderComplaint = item => {
    return (
      <ComplaintItem
        item={item}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        key={item.createdAt}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            multiline={true}
            style={styles.inputField}
            placeholder="Please write your complaint here"
            onChangeText={text => setComplaint(text)}
            value={complaint}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>ADD COMPLAINT</Text>
          </TouchableOpacity>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {inputError ? <Text style={styles.error}>{inputError}</Text> : null}
        </View>

        {complaints.length === 0 ? (
          <ScrollView contentContainerStyle={styles.messageContainer}>
            <Image
              style={styles.emptyPic}
              source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/152.png')}
            />
            <Text style={styles.message}>{'No complaints filed!'}</Text>
          </ScrollView>
        ) : (
          <>
            <View style={styles.headingView}>
              <Text style={styles.heading}>Past complaints</Text>
            </View>
            {complaints
              .sort((a, b) => b.createdAt - a.createdAt)
              .map(renderComplaint)}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  complaints: state.complaints,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  addComplaint: complaint => dispatch(addComplaint(complaint)),
  deleteComplaint: createdAt => dispatch(deleteComplaint(createdAt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactUs);
