import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import spacing from '../../../constants/spacing';
import ModalPopUp from '../../../components/ModalPopUp';
import {rootContext} from '../../../context/index';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export default (InputTopic = props => {
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');
  const {entireTopics} = useContext(rootContext);

  const handleAddButton = e => {
    if (/\S/.test(input)) {
      if (/(?!^\d+$)^.+$/.test(input)) {
        const topicNames = entireTopics.map(el => el.topic);
        if (topicNames.includes(input)) {
          setShowModal(true);
          setContent('Topic already present');
          setTimeout(() => {
            setContent('');
            setShowModal(false);
          }, 2000);
        } else {
          props.addNewTopic(input);
          setInput('');
          setFilteredData([]);
        }
      } else {
        setShowModal(true);
        setContent('Invalid topic');
        setTimeout(() => {
          setContent('');
          setShowModal(false);
        }, 2000);
      }
    } else {
      setShowModal(true);
      setContent('Empty topic');
      setTimeout(() => {
        setContent('');
        setShowModal(false);
      }, 2000);
    }
  };

  const search = text => {
    setInput(text);
    const filteredData = entireTopics.filter(character => {
      return character.topic.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={text => search(text)}
        value={input}
        platform="ios"
        onCancel={() => {
          setFilteredData([]);
        }}
        containerStyle={styles.searchbarStyle}
        inputContainerStyle={styles.searchbarInputStyle}
        autoCapitalize="none"
      />
      {/(?!^\d+$)^.+$/.test(input) || input == '' ? (
        <></>
      ) : (
        <Text style={styles.error}>This topic is not valid</Text>
      )}
      <AnimatedFlatList
        animationType={AnimationType.SlideFromBottom}
        animationDuration={500}
        data={
          filteredData && filteredData.length > 0
            ? filteredData.slice(0, 7)
            : ''
        }
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.topicContainer}
              onPress={() => {
                props.addTopic(item._id);
                setFilteredData([]);
                setInput('');
              }}>
              <Text style={styles.topicText}>{item.topic}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddButton}>
        <Text elevation={spacing.sm} style={styles.addText}>
          ADD
        </Text>
      </TouchableOpacity>

      <ModalPopUp showModal={showModal} content={content} />
    </View>
  );
});
