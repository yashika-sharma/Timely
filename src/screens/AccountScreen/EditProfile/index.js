import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useContext,
} from 'react';
import {Text, Image, View} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ActivityIndicator, TextInput, Portal, Modal} from 'react-native-paper';
import moment from 'moment';
import ModalCountry from '../ModalCountry';
import ModalConfirm from '../ModalConfirm';
import uploadpic from '../../../services/uploadpic';
import {Formik} from 'formik';
import * as Yup from 'yup';
import colors from '../../../constants/colors';
import {rootContext} from '../../../context/index';
import DatePicker from 'react-native-date-picker';
import axios from '../../../services/axiosConfig';
import Config from 'react-native-config';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Full Name')
    .required()
    .matches(
      /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
      'Full Name must contain only letters and space',
    ),
});

export default (EditProfile = props => {
  const [country, setCountry] = useState('');
  const [dateModal, setDateModal] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tinyLoader2, setTinyLoader2] = useState(false);
  const [networkError, setNetworkError] = useState('');
  const [date, setDate] = useState();
  const formRef = useRef();
  const {user, setUser} = useContext(rootContext);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () =>
        tinyLoader2 ? (
          <ActivityIndicator
            size="small"
            color={colors.popUpBase}
            style={styles.activityIndicator}
          />
        ) : (
          <Ionicons.Button
            name="checkmark-outline"
            size={32}
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
          size={32}
          backgroundColor={colors.base}
          onPress={() => handleCancel(formRef.current.values.name)}
          color={colors.popUpBase}
        />
      ),
    });
  }, [country, date, tinyLoader2]);

  useFocusEffect(
    useCallback(() => {
      setCountry(user.country);
      setDate(user.dateOfBirth ? new Date(user.dateOfBirth) : new Date());
    }, [user]),
  );
  const saveinfo = async user => {
    setUser(user);
    props.navigation.navigate('Account');
  };

  const handleSave = async values => {
    const {name} = values;
    setTinyLoader2(true);
    await axios
      .patch('/users/' + user._id, {
        fullName: name,
        country: country,
        dateOfBirth: date,
      })
      .then(async function(response) {
        await saveinfo(response.data);
      })
      .catch(function(error) {
        console.log(error);
        setNetworkError(error.toString());
      });
    setTinyLoader2(false);
  };

  const handleCancel = name => {
    if (
      props.route.params.prevFullName == name &&
      new Date(props.route.params.prevDate).getTime() == date.getTime() &&
      props.route.params.prevCountry == country
    ) {
      props.navigation.navigate('Account');
    } else {
      setVisible(true);
    }
  };

  const choosePhotoFromLibrary = () => {
    uploadpic(props.navigation, user, setUser);
  };

  return (
    <Formik
      innerRef={formRef}
      validationSchema={validationSchema}
      initialValues={{name: props.route.params.prevFullName}}
      onSubmit={values => {
        handleSave(values);
      }}>
      {({handleChange, handleBlur, values, errors}) => (
        <ScrollView style={styles.container}>
          <Image
            style={styles.image}
            source={
              user.image
                ? {uri: Config.BASE_URL + 'uploads/' + user.image}
                : require('../../../assets/user.png')
            }
          />

          <Ionicons
            name="camera"
            size={35}
            style={styles.iconStyle}
            onPress={choosePhotoFromLibrary}
            color={colors.black}
          />
          {networkError ? (
            <Text style={styles.error}>{networkError}</Text>
          ) : (
            <></>
          )}

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={values.name}
            onBlur={handleBlur('name')}
            onChangeText={handleChange('name')}
            style={styles.inputStyle}
            selectionColor={colors.base}
          />
          <Text style={styles.nameError}>{errors.name}</Text>
          <Text style={styles.label}>Date of birth</Text>
          <TouchableOpacity
            onPress={() => {
              setDateModal(true);
            }}>
            <Text style={styles.inputStyle2}>
              {moment(date).format('DD/MM/YYYY')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.label}>Country</Text>
          <TouchableOpacity onPress={() => setCountryModal(true)}>
            <Text style={styles.inputStyle2}>{country}</Text>
          </TouchableOpacity>
          {networkError != '' ? (
            <View>
              <Text style={styles.error}>
                No network connections. Please try again later
              </Text>
            </View>
          ) : (
            <></>
          )}

          <Portal>
            <Modal
              visible={dateModal}
              onDismiss={() => setDateModal(false)}
              contentContainerStyle={styles.modalStyle}>
              <DatePicker
                date={date}
                onDateChange={setDate}
                mode="date"
                maximumDate={new Date()}
                style={{
                  alignSelf: 'center',
                }}
              />
            </Modal>
          </Portal>
          <ModalCountry
            visible={countryModal}
            setCountryModal={setCountryModal}
            country={country}
            setCountry={setCountry}
          />
          <ModalConfirm
            visible={visible}
            setVisible={setVisible}
            navigation={props.navigation}
          />

          <Image
            source={require('../../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/100.png')}
            style={styles.logoPic}
          />
        </ScrollView>
      )}
    </Formik>
  );
});
