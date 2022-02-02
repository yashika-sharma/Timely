import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import colors from '../../../constants/colors';
import {rootContext} from '../../../context/index';
import axios from '../../../services/axiosConfig';
import {Switch} from 'react-native-paper';

export default (Privacy = props => {
  const {user, setUser} = useContext(rootContext);

  const handleNotifsChange = () => {
    axios
      .patch('/users/' + user._id, {
        notifications: !user.notifications,
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.privacy}>
      <Text style={styles.heading}>PRIVACY </Text>
      <View style={styles.emailRow}>
        <Ionicons name="mail-outline" size={17} color={colors.baseDark} />
        <Text style={styles.email}>EMAIL </Text>
      </View>
      <Text style={styles.email2}>{user.email} </Text>
      <View style={styles.notificationOuter}>
        <Ionicons
          name="notifications-outline"
          size={22}
          color={colors.baseDark}
        />
        <View>
          <View style={styles.notifsView}>
            <Text style={styles.notifsLabel}> Notifications </Text>
            <Switch
              value={user.notifications}
              onValueChange={handleNotifsChange}
              color={colors.baseMedium}
              style={styles.switch}
            />
          </View>

          <Text style={styles.notifsChange}>
            Turn them {user.notifications ? 'off' : 'on'}{' '}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.renderEnterEmail()}
        style={styles.changeAccount}>
        <View style={styles.leftCol}>
          <Ionicons name="mail-outline" size={20} color={colors.baseDark} />
          <Text style={styles.changeAccount}>Change email </Text>
        </View>
        <Ionicons
          name="arrow-forward-circle-outline"
          size={24}
          color={colors.modalCenteredView}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.renderEnterPassword()}
        style={styles.changeAccount}>
        <View style={styles.leftCol}>
          <Ionicons name="key-outline" size={20} color={colors.baseDark} />
          <Text style={styles.changeAccount}>Change Password </Text>
        </View>
        <Ionicons
          name="arrow-forward-circle-outline"
          size={24}
          color={colors.modalCenteredView}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOut} onPress={props.handleSignOut}>
        <View style={styles.leftCol}>
          <Ionicons name="exit-outline" size={20} color={colors.baseDark} />
          <Text style={styles.signOut}>Sign out </Text>
        </View>
        <Ionicons
          name="arrow-forward-circle-outline"
          size={24}
          color={colors.modalCenteredView}
        />
      </TouchableOpacity>
    </View>
  );
});
