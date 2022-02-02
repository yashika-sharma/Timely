import React, {useState, useLayoutEffect, useContext} from 'react';
import styles from './style';
import {
  View,
  Text,
  Modal,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RssItem from './RssItem';
import * as rssParser from 'react-native-rss-parser';
import {ActivityIndicator} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import colors from '../../constants/colors';
import {rootContext} from '../../context/index';
import axios from '../../services/axiosConfig';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .required()
    .url()
    .label('Url'),
});

export default (RssScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tinyLoader, setTinyLoader] = useState();
  const {user, fetchUserData, setUser} = useContext(rootContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons.Button
          name="add"
          size={28}
          backgroundColor={colors.base}
          onPress={() => setModalVisible(true)}
          color={colors.unreadbg}
        />
      ),
    });
  }, []);

  const handleAdd = values => {
    const {url} = values;
    let userData = user;
    if (userData.rss.includes(url)) {
      Alert.alert('Already exists!');
      setTinyLoader(false);
    } else {
      setTinyLoader(true);
      fetch(url)
        .then(response => {
          return response.text();
        })
        .then(responseData => {
          return rssParser.parse(responseData);
        })
        .then(async rss => {
          userData.rss.push(url);
          await axios
            .patch('/users/' + user._id, {
              rss: userData.rss,
            })
            .then(async res => {
              setUser(res.data);
            })
            .catch(function(error) {
              console.log("rss can't be added error", error);
            });
          setModalVisible(!modalVisible);
          setTinyLoader(false);
        })
        .catch(err => {
          console.log(err);
          if (err.toString() === 'TypeError: Network request failed') {
            setTinyLoader(false);
            alert('Internet not connected. Please try again later');
          } else {
            setTinyLoader(false);
            alert(
              'This RSS Format is not valid. Please check if you have tried the correct url.',
            );
          }
        });
    }
  };

  const handleDelete = async item => {
    let userData = user;
    let index = userData.rss.indexOf(item);
    userData.rss.splice(index, 1);
    await axios
      .patch('/users/' + user._id, {
        rss: userData.rss,
      })
      .then(async res => {
        setUser(res.data);
      })
      .catch(function(error) {
        console.log("rss can't be added error", error);
      });
  };

  const createRSS = ({item}) => {
    return <RssItem item={item} handleDelete={handleDelete} />;
  };

  const onRefresh = () => {
    fetchUserData();
  };

  return (
    <View style={styles.container}>
      {Array.isArray(user.rss) && user.rss.length ? (
        <AnimatedFlatList
          data={user.rss}
          renderItem={createRSS}
          keyExtractor={item => item}
          animationType={AnimationType.SlideFromRight}
          animationDuration={1000}
          onRefresh={onRefresh}
          refreshing={loading}
        />
      ) : (
        <View style={styles.messageContainer}>
          <Image
            style={styles.emptyPic}
            source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/172.png')}
          />
          <Text style={styles.message}>
            Please add subscription by clicking on the '+' sign
          </Text>
        </View>
      )}
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{url: ''}}
          onSubmit={values => handleAdd(values)}>
          {({handleChange, handleSubmit, values, errors}) => (
            <TouchableOpacity
              style={styles.centeredView}
              onPress={() => {
                setModalVisible(!modalVisible);
                setTinyLoader(false);
              }}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add a new RSS Feed</Text>
                <TextInput
                  value={values.url}
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  onChangeText={handleChange('url')}
                />
                {errors.url ? (
                  <Text style={styles.error}>{errors.url}</Text>
                ) : (
                  <></>
                )}
                {tinyLoader ? (
                  <ActivityIndicator
                    animating={true}
                    color={colors.base}
                    style={styles.loading}
                  />
                ) : (
                  <></>
                )}
                <View style={styles.modalMid}>
                  <TouchableOpacity
                    style={styles.openButton}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.textStyle}>ADD</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.modalFoot}>
                  <Ionicons
                    name="alert-circle-outline"
                    size={32}
                    color={colors.base}
                    style={styles.alertIcon}
                  />
                  <Text style={styles.notice}>
                    Don't know what to do? Go to the blog's official site and
                    search up the RSS link there (most of the sites today
                    provide them)
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </Formik>
      </Modal>
    </View>
  );
});
