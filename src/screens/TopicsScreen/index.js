import React, {useState, useContext} from 'react';
import styles from './style';
import {View, Text, KeyboardAvoidingView, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import AllTopics from './AllTopics';
import InputTopic from './InputTopic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalPopUp from '../../components/ModalPopUp';
import {rootContext} from '../../context/index';
import colors from '../../constants/colors';
import axios from '../../services/axiosConfig';

export default (TopicsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');
  const {entireTopics, user, fetchEntireTopics, setUser} = useContext(
    rootContext,
  );

  const addTopic = async key => {
    if (user.topics.includes(key)) {
      setShowModal(true);
      setContent('Topic already chosen');
      setTimeout(() => {
        setContent('');
        setShowModal(false);
      }, 2000);
    } else {
      let userData = user;
      userData.topics.push(key);
      axios
        .patch('/users/' + user._id, {
          topics: userData.topics,
        })
        .then(async res => {
          setUser(res.data);
        })
        .catch(error => {
          console.log(error);
          setShowModal(true);
          setContent(error.toString());
          setTimeout(() => {
            setContent('');
            setShowModal(false);
          }, 2000);
        });
    }
  };

  const deleteTopic = async item => {
    let userData = user;
    var index = userData.topics.indexOf(item);
    userData.topics.splice(index, 1);
    axios
      .patch('/users/' + user._id, {
        topics: userData.topics,
      })
      .then(async res => {
        setUser(res.data);
      })
      .catch(error => {
        console.log(error);
        setShowModal(true);
        setContent(error.toString());
        setTimeout(() => {
          setContent('');
          setShowModal(false);
        }, 2000);
      });
  };

  const addNewTopic = async input => {
    axios
      .post('/topics', {
        topic: input,
      })
      .then(res => {
        fetchEntireTopics();
        addTopic(res.data._id);
      })
      .catch(error => {
        console.log(error);
        setShowModal(true);
        setContent(error.toString());
        setTimeout(() => {
          setContent('');
          setShowModal(false);
        }, 2000);
      });
  };

  const createTopic = topic => {
    let myTopic = entireTopics.find(el => el._id == topic);
    return (
      <View style={styles.topic} key={myTopic._id}>
        <Text style={styles.topicText}>
          {myTopic.topic}
          {'     '}
        </Text>
        <TouchableOpacity onPress={() => deleteTopic(topic)}>
          <Ionicons name="trash" size={21} color={colors.baseDark} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <InputTopic addTopic={addTopic} addNewTopic={addNewTopic} />
      <ScrollView>
        <View style={styles.heading}>
          <Text style={styles.headingText}>My Topics</Text>
        </View>
        {Array.isArray(user.topics) && user.topics.length ? (
          <View style={styles.topicsContainer}>
            {user.topics.map(createTopic)}
          </View>
        ) : (
          <View style={styles.messageContainer}>
            <Image
              style={styles.emptyPic}
              source={require('../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/64.png')}
            />
            <Text style={styles.message}>You have no chosen topics</Text>
          </View>
        )}
        <AllTopics addTopic={addTopic} />
        <ModalPopUp showModal={showModal} content={content} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
});
