import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import moment from 'moment';
import styles from '../../NewsScreen/RenderItem/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import share from '../../../services/share';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

let RenderNotif;

export default (RenderNotif = props => {
  const handleClick = url => {
    if (props.history) {
      props.navigation.navigate('NotificationItem', {
        url: url,
        history: props.history ? 'Notifications' : 'News',
      });
    } else {
      props.navigation.navigate('NewsItem', {
        url: url,
        history: props.history ? 'Notifications' : 'News',
      });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, props.readProp == false ? styles.unread : '']}
      onPress={() => handleClick(props.item.url)}>
      <View style={styles.head}>
        <Text style={styles.text}>{props.item?.title}</Text>
        {props.item?.urlToImage ? (
          <Image
            elevation={spacing.sm}
            source={{uri: props.item?.urlToImage}}
            style={styles.newsPic}
          />
        ) : (
          <Image
            elevation={spacing.sm}
            source={require('../../../assets/unnamed.jpg')}
            style={styles.newsPic}
          />
        )}
      </View>
      <View style={styles.foot}>
        <View style={styles.footCol1}>
          <Text style={styles.source}>{props.item?.source?.name}</Text>
          <Text style={styles.time}>
            - {moment(props.item?.publishedAt || moment.now()).fromNow()}
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="share-social-outline"
            size={24}
            style={styles.share}
            color={colors.expBlue}
            onPress={() => share(props.item?.url)}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
});
