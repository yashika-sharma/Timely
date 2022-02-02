import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styles from './style';
import moment from 'moment';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import share from '../../../services/share';
import colors from '../../../constants/colors';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export default (RssDetailScreen = props => {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setData(props.route.params.data);
    }, []),
  );

  const handleClick = url => {
    props.navigation.navigate('RssDetailItem', {url: url, history: 'RSS'});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClick(item.links[0].url)}>
        <Avatar.Text
          size={45}
          label="RSS"
          style={styles.avatar}
          labelStyle={styles.avatarText}
        />
        <View style={styles.textContainer}>
          <Text style={styles.item} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.foot}>
            <Text style={styles.tap}>Tap to know more</Text>
            <View style={styles.footCol1}>
              <Text style={styles.time}>
                {moment(item.published || moment.now()).fromNow()}
              </Text>
              <TouchableOpacity onPress={() => share(item.links[0].url)}>
                <Ionicons
                  name="share-social-outline"
                  size={24}
                  style={styles.share}
                  color={colors.popUpBase}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return props.route.params.data.length > 0 ? (
    <AnimatedFlatList
      data={data}
      renderItem={renderItem}
      animationType={AnimationType.SlideFromRight}
      animationDuration={1000}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  ) : (
    <View style={styles.messageContainer}>
      <Image
        style={styles.emptyPic}
        source={require('../../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/180.png')}
      />
      <Text style={styles.message}>No Articles to read :/</Text>

      <Text style={styles.message}>Please try again later</Text>
    </View>
  );
});
