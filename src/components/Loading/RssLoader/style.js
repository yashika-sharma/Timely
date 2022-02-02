import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
  },
  mediaStyle: {
    backgroundColor: colors.base,
    marginRight: spacing.ml,
    height: spacing.g,
    width: spacing.g,
    borderRadius: spacing.g,
  },
  foot: {alignItems: 'flex-end', justifyContent: 'flex-end'},
}));
