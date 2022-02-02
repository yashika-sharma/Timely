import React, {useState, useCallback, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import Privacy from './Privacy';
import colors from '../../constants/colors';
import {rootContext} from '../../context/index';
import logout from '../../services/logout';
import {connect} from 'react-redux';
import {changeAuthentication} from '../../redux/actions/actions';
import Config from 'react-native-config';

const AccountScreen = ({navigation, changeAuthentication}) => {
  const [emptyErrorMessage, setEmptyErrorMessage] = useState(false);

  const {user} = useContext(rootContext);

  useFocusEffect(
    useCallback(() => {
      if (user.fullName == '' && user.dateOfBirth == '' && user.country == '') {
        setEmptyErrorMessage(true);
      } else {
        setEmptyErrorMessage('');
      }
    }, [user]),
  );

  const handleSignOut = () => {
    logout(changeAuthentication);
  };

  const renderEnterEmail = () => {
    navigation.navigate('ChangeEmail', {
      email: user.email,
    });
  };

  const renderEnterPassword = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.head}>
          <View style={styles.leftCol}>
            <Image
              style={styles.image}
              source={
                user.image
                  ? {uri: Config.BASE_URL + 'uploads/' + user.image}
                  : require('../../assets/user.png')
              }
            />
            <Text style={styles.name}>{user.fullName}</Text>
          </View>

          <View style={styles.rightCol}>
            <View style={styles.news}>
              <Text style={styles.count}>
                {user.topics ? user.topics.length : 0}
              </Text>
              <Text style={styles.countLabel}>News</Text>
              <Text style={styles.countLabel}>Topics</Text>
            </View>

            <View style={styles.rss}>
              <Text style={styles.count}>{user.rss ? user.rss.length : 0}</Text>
              <Text style={styles.countLabel}>RSS</Text>
              <Text style={styles.countLabel}>Subscriptions</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.profile}>
        <View style={styles.labelContainer}>
          <Ionicons name="calendar-outline" size={14} style={styles.icons} />
          <Text style={styles.label}> DATE OF BIRTH </Text>
        </View>
        <Text style={styles.inputStyle}>
          {user.dateOfBirth
            ? moment(user.dateOfBirth).format('MMMM Do YYYY')
            : ''}
        </Text>
        <View style={styles.labelContainer}>
          <Ionicons name="flag-outline" size={14} style={styles.icons} />
          <Text style={styles.label}> COUNTRY </Text>
        </View>
        <Text style={styles.inputStyle}>{user.country}</Text>
      </View>
      <View>
        {emptyErrorMessage ? (
          <View style={styles.emptyErrorContainer}>
            <Ionicons
              name="alert-circle-outline"
              size={20}
              color={colors.errorText}
            />
            <Text style={styles.emptyError}>Add details to your profile!</Text>
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={styles.editProfileContainer}
          onPress={() => {
            navigation.navigate('EditProfile', {
              prevFullName: user.fullName,
              prevDate: user.dateOfBirth,
              prevCountry: user.country,
            });
          }}>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Privacy
        handleSignOut={handleSignOut}
        renderEnterEmail={renderEnterEmail}
        renderEnterPassword={renderEnterPassword}
      />
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  changeAuthentication: value => dispatch(changeAuthentication(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AccountScreen);
