import {Badge} from 'react-native-paper';
import Config from 'react-native-config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={
              props.user.image
                ? {
                    uri: Config.BASE_URL + 'uploads/' + props.user.image,
                  }
                : require('../../assets/user.png')
            }
            style={styles.logo}
          />
          <Text style={styles.name}>{props.user.fullName}</Text>
          <View style={styles.data}>
            <View style={styles.col}>
              <Ionicons name="logo-rss" color={colors.baseDark} size={23} />
              <Text style={styles.count}>
                {props.user.rss ? props.user.rss.length : 0}
              </Text>
            </View>
            <View style={styles.col}>
              <Ionicons name="newspaper" color={colors.baseDark} size={23} />
              <Text style={styles.count}>
                {props.user.topics ? props.user.topics.length : 0}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <View style={styles.row}>
            <Ionicons name="home" size={25} color={colors.baseDark} />
            <Text style={styles.label}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Topics');
          }}>
          <View style={styles.row}>
            <Ionicons name="star" size={25} color={colors.baseDark} />
            <Text style={styles.label}>News Topics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Notifications');
          }}>
          <View style={styles.row}>
            <Ionicons name="notifications" size={25} color={colors.baseDark} />
            <Text style={styles.label}>Notifications</Text>
            {props.count != 0 ? (
              <Badge style={styles.badge}>{props.count}</Badge>
            ) : null}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Account');
          }}>
          <View style={styles.row}>
            <Ionicons name="person" size={25} color={colors.baseDark} />
            <Text style={styles.label}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ContactUs');
          }}>
          <View style={styles.row}>
            <Ionicons name="mail" size={25} color={colors.baseDark} />
            <Text style={styles.label}>Contact Us</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;
