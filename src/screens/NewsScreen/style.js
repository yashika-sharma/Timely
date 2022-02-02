import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';

export default (styles = StyleSheet.create({
  container: {
    paddingTop: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.white,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.ml,
  },
  message: {
    fontStyle: 'italic',
    fontFamily: 'Verdana',
    fontSize: fontSize.sl,
    textAlign: 'center',
  },
  emptyPic: {
    marginBottom: spacing.m,
    opacity: spacing.p7,
  },
}));
