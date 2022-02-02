import React, {useState, useCallback, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../../../components/Loading';
import {Formik} from 'formik';
import * as Yup from 'yup';
import login from '../../../services/login';
import {rootContext} from '../../../context/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {connect} from 'react-redux';
import {fetchComplaints} from '../../../redux/actions/actions';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    )
    .label('Password'),
});

const SignInScreen = ({navigation, fetchComplaints, error}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState();
  const {setUser, setEntireTopics} = useContext(rootContext);
  useFocusEffect(
    useCallback(() => {
      setErrorMessage('');
    }, []),
  );

  const handleSignIn = async values => {
    setLoading(true);
    login(
      values,
      setErrorMessage,
      setUser,
      setEntireTopics,
      fetchComplaints,
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
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            handleSignIn(values);
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
              <Text style={styles.heading}>SIGN IN</Text>
              <View style={styles.formContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.email}
                  autoCapitalize="none"
                  placeholder="Email.."
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Text style={styles.inlineError}>
                  {touched.email && errors.email}
                </Text>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  secureTextEntry
                  style={styles.password}
                  placeholder="Password.."
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Text style={styles.inlineError}>
                  {touched.password && errors.password}
                </Text>
              </View>
              {errorMessage ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.error}>
                    {errorMessage ? errorMessage : ''}
                  </Text>
                </View>
              ) : (
                <></>
              )}
              {error ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.error}>{error}</Text>
                </View>
              ) : null}
              <View style={styles.submitContainer}>
                <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                  <Text style={styles.submitText}>
                    {'  '}SIGN IN {'  '}
                  </Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                  <Text style={styles.option}>Don't have an account?</Text>
                  <TouchableOpacity
                    style={styles.submit2}
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.submitText2}>Sign Up</Text>
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

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchComplaints: userId => dispatch(fetchComplaints(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
