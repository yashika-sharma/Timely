import React, {useState, useCallback, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loading from '../../../components/Loading';
import {useFocusEffect} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import signup from '../../../services/signup';
import {rootContext} from '../../../context/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {connect} from 'react-redux';
import {createComplaintsCollection} from '../../../redux/actions/actions';

const SignUpScreen = ({navigation, createComplaintsCollection}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState();
  const {setUser, setEntireTopics, setNotifications} = useContext(rootContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email()
      .label('Email'),
    password: Yup.string()
      .required()
      .label('Password')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),
  });

  useFocusEffect(
    useCallback(() => {
      setErrorMessage('');
    }, []),
  );

  const handleSignUp = values => {
    setLoading(true);
    signup(
      values,
      setErrorMessage,
      setUser,
      setEntireTopics,
      setNotifications,
      createComplaintsCollection,
      setLoading,
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', confirmPassword: ''}}
          onSubmit={values => {
            handleSignUp(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <ScrollView
              contentContainerStyle={[
                styles.c,
                Platform.OS === 'ios' ? {flex: 1} : '',
              ]}>
              <View style={styles.headingContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/AppIcons/appstore.png')}
                />
              </View>
              <Text style={styles.heading}>SIGN UP</Text>
              <View style={styles.formContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.email}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                  placeholder="Email.."
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <Text style={styles.inlineError}>
                  {touched.email && errors.email}
                </Text>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.password}
                  value={values.password}
                  placeholder="Password.."
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Text style={styles.inlineError}>
                  {touched.password && errors.password}
                </Text>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.confirmPassword}
                  secureTextEntry
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirm Password.."
                  onChangeText={handleChange('confirmPassword')}
                />
                <Text style={styles.inlineError}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
              </View>
              <View style={styles.submitContainer}>
                <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                  <Text style={styles.submitText}>
                    {'   '}REGISTER {'   '}
                  </Text>
                </TouchableOpacity>
                {errorMessage ? (
                  <View style={styles.errorContainer}>
                    <Text style={styles.error}>
                      {errorMessage ? errorMessage : ''}
                    </Text>
                  </View>
                ) : (
                  <></>
                )}
                <View style={styles.footer}>
                  <Text style={styles.option}>Already have an account?</Text>
                  <TouchableOpacity
                    style={styles.submit2}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.submitText2}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  createComplaintsCollection: userId =>
    dispatch(createComplaintsCollection(userId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUpScreen);
