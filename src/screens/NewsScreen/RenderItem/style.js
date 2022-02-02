import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  card: {
    borderWidth: spacing.p8,
    borderRadius: spacing.ml,
    marginBottom: spacing.sm,
    padding: spacing.ml,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: spacing.p6,
    shadowRadius: spacing.xs,
    elevation: spacing.xs,
    backgroundColor: colors.white,
    borderColor: colors.expBlue,
    //borderColor: 'rgb(119, 138, 101)',
  },
  head: {
    marginVertical: spacing.sm,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: spacing.ml,
  },
  text: {
    fontSize: fontSize.sl,
    flex: 2,
    fontWeight: '500',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    color: colors.count,
    padding: spacing.xs,
    marginBottom: spacing.sm,
    paddingBottom: spacing.l,
  },
  newsPic: {
    borderRadius: spacing.m,
    padding: spacing.ml,
    marginHorizontal: spacing.ml,
    flex: 1,
    height: '100%',
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: spacing.p1,
    shadowRadius: spacing.o,
  },
  content: {
    fontSize: fontSize.ml,
    fontFamily: 'Verdana',
    marginTop: spacing.s,
    color: colors.label,
    marginBottom: spacing.sm,
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: spacing.ml,
  },
  source: {
    marginTop: spacing.ml,
    color: colors.label,
    fontSize: fontSize.ml,
    marginRight: spacing.sm,
  },
  time: {
    fontSize: fontSize.ml,
    color: colors.baseDark,
    fontFamily: 'Verdana',
    marginTop: spacing.ml,
  },
  footCol1: {
    flexDirection: 'row',
  },
  share: {
    marginTop: spacing.ml,
  },
  readOption: {
    fontSize: fontSize.ml,
  },
  unread: {
    backgroundColor: colors.unreadbg,
    borderBottomWidth: spacing.sm,
    borderColor: colors.unreadBorder,
    marginBottom: spacing.z,
    borderRadius: spacing.z,
    padding: spacing.m,
    borderTopLeftRadius: spacing.m,
    borderTopRightRadius: spacing.m,
  },
}));
