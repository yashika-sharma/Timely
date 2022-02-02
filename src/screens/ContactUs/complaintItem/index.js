import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style';

const ComplaintItem = ({item, handleDelete, handleEdit}) => {
  const [fullComplaint, setFullComplaint] = useState(false);

  const handleFullComplaint = () => {
    setFullComplaint(!fullComplaint);
  };

  return (
    <TouchableOpacity
      style={styles.complaintView}
      onPress={handleFullComplaint}>
      <View style={styles.head}>
        <Text style={styles.complaint}>
          {fullComplaint
            ? item.complaint
            : item.complaint.slice(0, 110) + '...'}
        </Text>
      </View>
      <View style={styles.foot}>
        <Text style={styles.time}>
          Made on - {moment(item.createdAt).format('L')}
        </Text>
        <View style={styles.footRight}>
          <TouchableOpacity
            style={styles.buttonBg}
            onPress={() => handleDelete(item.createdAt)}>
            <Ionicons name="trash" size={21} color={colors.errorText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonBg}
            onPress={() => handleEdit(item.createdAt, item.complaint)}>
            <Ionicons name="pencil" size={21} color={colors.baseDark} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ComplaintItem;
