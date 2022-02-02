import React, {useState, useLayoutEffect, useRef, useContext} from 'react';
import {View, Text, Keyboard, Image} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-paper';
import colors from '../../../constants/colors';
import {rootContext} from '../../../context/index';
import axios from '../../../services/axiosConfig';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .label('New Password')
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
});

export default (ChangePasswordScreen = props => {
  const [email, setEmail] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [failError, setFailError] = useState('');

  const {user, setUser} = useContext(rootContext);

  const formRef = useRef();

  useLayoutEffect(() => {
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
            props.navigation.goBack();
          }}
          color={colors.popUpBase}
        />
      ),
    });
  }, []);

  const onChangePasswordPress = async values => {
    if (email === user.email) {
      const {newPassword} = values;
      axios
        .patch('/users/' + user._id, {password: newPassword})
        .then(res => {
          setUser(res.data);

          props.navigation.goBack();
        })
        .catch(error => {
          console.log(error);
          setFailError(error.toString());
        });
    } else {
      setPwdError('Invalid email');
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        innerRef={formRef}
        validationSchema={validationSchema}
        initialValues={{newPassword: ''}}
        onSubmit={values => {
          onChangePasswordPress(values);
        }}>
        {({handleChange, handleBlur, values, errors}) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text style={styles.label}>
              Enter current email for confirmation
            </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Current email"
              autoCapitalize="none"
              value={email}
              onChangeText={v => setEmail(v)}
            />
            {pwdError ? <Text style={styles.error}>{pwdError}</Text> : <Text />}
            <Text style={styles.label}>Enter new Password</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="New Password"
              autoCapitalize="none"
              value={values.newPassword}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              secureTextEntry
            />
            <Text style={styles.error}>{errors.newPassword}</Text>
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
