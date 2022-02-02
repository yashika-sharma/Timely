import {StyleSheet} from 'react-native';
import fontSize from '../../../constants/fontSize';

export default (styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  message: {
    fontSize: fontSize.sl,
  },
}));
