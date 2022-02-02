// //*https://breaking-news2.p.rapidapi.com

import React, {useState, useCallback, useContext, useEffect} from 'react';
import {View, Text, RefreshControl, Image, Alert} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import Newsloader from '../../components/Loading/NewsLoader';
import RenderItem from './RenderItem';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {rootContext} from '../../context/index';
import messaging from '@react-native-firebase/messaging';
import Config from 'react-native-config';

export default (NewsScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [newsError, setNewsError] = useState();
  const [page, setPage] = useState(1);
  const {user, entireTopics} = useContext(rootContext);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        setLoading(true);
        getNews(page);
      } else {
        return;
      }
    }, [user]),
  );

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
      let body = JSON.parse(remoteMessage.data.body);
      navigation.navigate('NewsItem', {
        url: body.url,
      });
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
          let body = JSON.parse(remoteMessage.data.body);

          navigation.navigate('NewsItem', {
            url: body.url,
          });
        }
      });
  }, []);

  async function getNews(page) {
    setPage(page);
    let topicNames = [];
    let result = [];
    for (var i = 0; i < user.topics.length; i++) {
      for (var j = 0; j < entireTopics.length; j++) {
        if (user.topics[i] === entireTopics[j]._id) {
          topicNames.push(entireTopics[j].topic);
        }
      }
    }
    if (topicNames.length > 0) {
      try {
        let dateObj = new Date();
        let date = dateObj.toJSON().slice(0, 10);
        let articles = await fetch(
          Config.NEWS_URL +
            topicNames.join(' OR ') +
            '&sortBy=publishedAt&language=en&page=' +
            page +
            '&from=' +
            date,
          {
            headers: {
              'X-API-KEY': Config.API_KEY,
            },
          },
        );
        result = await articles.json();
        if (result.code == 'rateLimited') {
          setNewsError(result.message);
        } else {
          articles = null;
          if (page === 1) {
            setNewsError('');
            setData(result.articles);
          } else {
            let combinedArticles = [...data, ...result.articles];
            let set = new Set(combinedArticles);
            let uniqueNewsResult = [...set];
            setNewsError('');
            setData(uniqueNewsResult);
          }
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.toString() === 'TypeError: Network request failed') {
          setNewsError('Internet not connected. Pull to refresh the screen.');
        } else if (
          error.toString() ===
          'TypeError: Invalid attempt to spread non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        ) {
        } else {
          setNewsError(error.toString());
        }
        setLoading(false);
      }
    } else {
      setNewsError(
        'You have no topics selected about which you would be interested in reading. Kindly choose them in the Topics section.',
      );
      setLoading(false);
    }
  }

  const createNews = item => {
    return (
      <RenderItem
        item={item.item}
        key={item.item.title}
        navigation={navigation}
      />
    );
  };

  const onRefresh = () => {
    getNews(1);
  };

  const onScrollHandler = () => {
    getNews(page + 1);
  };

  const renderFooter = () => {
    if (loading) return null;
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  if (loading) return <Newsloader />;

  return newsError ? (
    <ScrollView
      contentContainerStyle={styles.messageContainer}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} />
      }>
      <Image
        style={styles.emptyPic}
        source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/152.png')}
      />
      <Text style={styles.message}>{newsError}</Text>
    </ScrollView>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={createNews}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} />
        }
        onEndReached={() => onScrollHandler()}
        onEndThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
});
