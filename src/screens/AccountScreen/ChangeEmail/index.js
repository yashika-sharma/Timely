import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, Text, Alert, Keyboard, Image} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-paper';
import colors from '../../../constants/colors';
import axios from '../../../services/axiosConfig';
import {rootContext} from '../../../context/index';

const validationSchema = Yup.object().shape({
  newEmail: Yup.string()
    .required()
    .email()
    .label('Email'),
});

export default (ChangeEmailScreen = props => {
  const [email, setEmail] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [failError, setFailError] = useState('');

  const {user, setUser} = useContext(rootContext);

  const formRef = useRef();

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Ionicons.Button
          name="checkmark-outline"
          size={30}
          backgroundColor={colors.base}
          onPress={() => {
            if (formRef.current) {
              formRef.current.handleSubmit();
            }
          }}
          color={colors.popUpBase}
        />
      ),
      headerLeft: () => (
        <Ionicons.Button
          name="close-outline"
          size={30}
          backgroundColor={colors.base}
          onPress={() => {
            if (
              formRef.current.values.newEmail != props.route.params.email &&
              formRef.current.values.newEmail != ''
            ) {
              Alert.alert(
                'Alert',
                'You have unsaved changes. Are you sure you want to cancel?',
                [
                  {
                    text: 'Yes',
                    onPress: () => props.navigation.goBack(),
                    style: 'cancel',
                  },
                  {text: 'No', onPress: () => console.log('Pressed no')},
                ],
                {cancelable: false},
              );
            } else {
              props.navigation.goBack();
            }
          }}
          color={colors.popUpBase}
        />
      ),
    });
  }, []);

  const onChangeEmailPress = async values => {
    if (email === props.route.params.email) {
      const {newEmail} = values;
      axios
        .patch('/users/' + user._id, {
          email: newEmail,
        })
        .then(res => {
          setUser(res.data);
          props.navigation.goBack();
        })
        .catch(error => {
          console.log(error);
          setFailError(error.toString());
        });
    } else {
      setPwdError('Incorrect email');
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        innerRef={formRef}
        validationSchema={validationSchema}
        initialValues={{newEmail: ''}}
        onSubmit={values => {
          onChangeEmailPress(values);
        }}>
        {({handleChange, handleBlur, values, errors}) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text style={styles.label}>Enter current email</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Current email"
              placeholderTextColor={colors.placeholderText}
              autoCapitalize="none"
              value={email}
              onChangeText={v => setEmail(v)}
            />
            {pwdError ? <Text style={styles.error}>{pwdError}</Text> : <Text />}
            <Text style={styles.label}>Enter new Email</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="New email"
              placeholderTextColor={colors.placeholderText}
              autoCapitalize="none"
              value={values.newEmail}
              onChangeText={handleChange('newEmail')}
              onBlur={handleBlur('newEmail')}
            />
            <Text style={styles.error}>{errors.newEmail}</Text>
            {failError ? (
              <View style={styles.fail}>
                <Text style={styles.errorFail}>erereoeevvhvhvh</Text>
              </View>
            ) : (
              <></>
            )}
          </TouchableWithoutFeedback>
        )}
      </Formik>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/196.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
});
