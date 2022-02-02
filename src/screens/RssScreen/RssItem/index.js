import React, {useCallback, useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import * as rssParser from 'react-native-rss-parser';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import styles from './style';
import {Avatar} from 'react-native-paper';
import {SwipeRow} from 'react-native-swipe-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RssLoader from '../../../components/Loading/RssLoader';
import colors from '../../../constants/colors';

export default (RssItem = props => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetch(props.item)
        .then(response => {
          return response.text();
        })
        .then(responseData => {
          return rssParser.parse(responseData);
        })
        .then(rss => {
          setData(rss);
          setImage(rss.image.url);
          setError('');
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
          if (err.toString() === 'TypeError: Network request failed')
            setError('Internet not connected');
          else {
            setError(
              'The RSS Format is not appropriate. Please check if you have tried the correct url. Please delete this and try again.',
            );
          }
        });
    }, []),
  );

  const handleDelete = item => {
    props.handleDelete(item);
  };

  if (loading) return <RssLoader />;

  return error ? (
    <SwipeRow rightOpenValue={-75} disableRightSwipe>
      <Ionicons.Button
        name="trash-outline"
        onPress={() => handleDelete(props.item)}
        style={styles.rssContainerHidden}
        size={40}
        color={colors.imageBorder}
      />
      <View style={styles.rssContainer}>
        <View style={styles.error}>
          <Ionicons
            name="alert-circle-outline"
            size={30}
            color={colors.base}
            style={styles.errorIcon}
          />
          <Text style={styles.textError}>{error}</Text>
        </View>
      </View>
    </SwipeRow>
  ) : (
    <SwipeRow
      rightOpenValue={-75}
      closeOnRowPress={true}
      leftActionValue={0}
      disableRightSwipe>
      <Ionicons.Button
        name="trash-outline"
        onPress={() => handleDelete(props.item)}
        style={styles.rssContainerHidden}
        size={40}
        color={colors.imageBorder}
      />
      <TouchableOpacity
        style={styles.rssContainer}
        onPress={() =>
          navigation.navigate('RssDetail', {
            data: data.items,
            name: data.title,
          })
        }>
        <View>
          {typeof image !== 'undefined' ? (
            <Avatar.Image source={{uri: image}} style={styles.avatarImage} />
          ) : (
            <Avatar.Text
              size={60}
              label="RSS"
              style={styles.avatar}
              labelStyle={styles.avatarText}
            />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {data.description ? data.description : ''}
            {data.description ? '...' : ''}
          </Text>
          <Text style={styles.time}> {data.type} | Last updated</Text>
          <Text style={styles.time}>
            {moment(data.lastUpdated || moment.now()).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeRow>
  );
});
