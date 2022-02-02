import React, {useContext} from 'react';
import styles from './style';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {rootContext} from '../../../context';

export default (AllTopics = props => {
  const {entireTopics} = useContext(rootContext);

  const createTopic = topic => {
    return (
      <TouchableOpacity
        key={topic._id}
        style={styles.topic}
        onPress={() => props.addTopic(topic._id)}>
        <Text style={styles.topicText}>{topic.topic}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>All Topics</Text>
      </View>
      {Array.isArray(entireTopics) && entireTopics.length ? (
        <View style={styles.topicsContainer}>
          {entireTopics.slice(0, 29).map(createTopic)}
        </View>
      ) : (
        <Text>bleh</Text>
      )}
    </View>
  );
});
