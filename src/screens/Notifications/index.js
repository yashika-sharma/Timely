import React, {useContext, useCallback} from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import stylesForNotif from './style';
import {rootContext} from '../../context/index';
import RenderNotif from './RenderNotif/index';
import {useFocusEffect} from '@react-navigation/native';
import axios from '../../services/axiosConfig';

export default (NotificationsScreen = ({navigation}) => {
  const {notifications, user, fetchNotifications} = useContext(rootContext);

  useFocusEffect(
    useCallback(() => {
      let notifs = notifications.map(notif => {
        notif['read'] = true;
        return notif;
      });

      axios
        .patch('/notifications/' + user._id, {
          notifications: notifs,
        })
        .then(async res => {
          fetchNotifications();
        })
        .catch(error => {
          console.log(error.response);
          if (error.response.data.message == 'request entity too large') {
            let deleteLastQuadOfNotifArray = notifs.slice(
              Math.ceil((notifs.length * 3) / 4),
              Math.ceil(notifs.length),
            );
            axios
              .patch('/notifications/' + user._id, {
                notifications: deleteLastQuadOfNotifArray,
              })
              .then(async res => {
                console.log('1/4th of array deleted');
                setNotifications(res.data.notifications);
              })
              .catch(error => {
                console.log(
                  'error in deleting 1/4th of elements',
                  error.response,
                );
              });
          }
        });
    }, [notifications.length]),
  );

  const notification = ({item}) => {
    return (
      <RenderNotif
        item={item.news}
        readProp={item.read}
        navigation={navigation}
        history="Notifications"
      />
    );
  };
  return (
    <View style={stylesForNotif.container}>
      {notifications.length == 0 ? (
        <ScrollView contentContainerStyle={stylesForNotif.messageContainer}>
          <Image
            style={stylesForNotif.emptyPic}
            source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/152.png')}
          />
          <Text style={stylesForNotif.message}>
            {'No notifications to catch up to!'}
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          data={notifications}
          renderItem={notification}
          keyExtractor={item => item.index}
        />
      )}
    </View>
  );
});
