import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
  },
  media: {
    marginBottom: spacing.m,
  },
  mediaStyle: {
    backgroundColor: colors.grey,
    height: 65,
    width: 100,
  },
  lines: {
    marginBottom: spacing.ml,
  },
  time: {
    marginTop: spacing.ml,
  },
  line: {
    alignSelf: 'stretch',
  },
  view: {paddingHorizontal: spacing.m},
}));
