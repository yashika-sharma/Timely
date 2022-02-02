import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    backgroundColor: colors.white,
  },
  itemContainer: {
    marginVertical: spacing.xs,
    borderWidth: spacing.p4,
    borderRadius: spacing.ml,
    backgroundColor: colors.white,
    padding: spacing.s,
    flexDirection: 'row',
    borderColor: colors.baseDark,
  },
  item: {
    fontSize: fontSize.sl,
    fontWeight: '400',
    marginBottom: spacing.s,
  },
  newsPic: {
    //height: '100%',
    //width: '100%',
    borderRadius: spacing.sm,
  },
  time: {
    textAlign: 'right',
    color: colors.baseText,
    alignSelf: 'center',
    paddingTop: spacing.sm,
  },
  description: {
    fontSize: fontSize.ml,
    fontStyle: 'italic',
  },
  textContainer: {
    padding: spacing.sm,
    flex: 1,
    marginHorizontal: spacing.sm,
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.m,
  },
  tap: {
    fontStyle: 'italic',
    color: colors.popUpBase,
    alignSelf: 'center',
    paddingTop: spacing.s,
  },
  avatar: {
    marginTop: spacing.sm,
    backgroundColor: colors.baseText,
    padding: spacing.o,
  },
  share: {
    marginLeft: spacing.ml,
    marginTop: spacing.ml,
  },
  footCol1: {
    flexDirection: 'row',
  },
  avatarText: {fontSize: spacing.l},
  message: {
    alignSelf: 'center',
    fontStyle: 'italic',
    fontFamily: 'Verdana',
    fontSize: fontSize.sl,
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
}));
