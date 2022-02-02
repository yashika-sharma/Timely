import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import fontSize from '../../constants/fontSize';

const stylesForNotif = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xxs,
  },
  heading: {
    fontSize: fontSize.l,
    fontFamily: 'Verdana',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.ml,
  },
  emptyPic: {
    marginBottom: spacing.m,
    opacity: spacing.p7,
  },
  message: {
    fontStyle: 'italic',
    fontFamily: 'Verdana',
    fontSize: fontSize.sl,
    textAlign: 'center',
  },
});
export default stylesForNotif;
