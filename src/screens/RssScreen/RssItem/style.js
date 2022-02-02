import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: spacing.ml,
  },
  title: {
    fontSize: fontSize.sl,
    fontWeight: '600',
    flexWrap: 'wrap',
    marginLeft: spacing.ml,
  },
  rssContainer: {
    padding: spacing.m,
    borderWidth: spacing.p7,
    borderColor: colors.grey,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: spacing.xs,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: spacing.p7,
    shadowRadius: spacing.xs,
    elevation: spacing.s,
    borderRadius: spacing.m,
  },
  timeLabel: {
    fontWeight: '500',
  },
  foot: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  description: {
    fontSize: fontSize.ml,
    fontFamily: 'Verdana',
    flexWrap: 'wrap',
    marginLeft: spacing.ml,
    marginTop: spacing.m,
    color: colors.count,
    marginBottom: spacing.m,
    fontStyle: 'italic',
  },
  titleContainer: {
    flex: 1,
  },
  time: {
    color: colors.baseText,
    alignSelf: 'flex-end',
    fontSize: fontSize.ml,
  },
  error: {
    padding: spacing.l,
    flexDirection: 'row',
    flex: 1,
  },
  textError: {
    fontSize: fontSize.sl,
    fontStyle: 'italic',
    padding: spacing.sm,
  },
  standaloneRowBack: {
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.l,
  },
  backTextWhite: {
    color: colors.white,
  },
  deleteButton: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  rssContainerHidden: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    backgroundColor: colors.white,
    paddingBottom: spacing.l,
  },
  avatar: {
    marginTop: spacing.sm,
    backgroundColor: colors.baseText,
    padding: spacing.o,
  },
  errorIcon: {
    paddingVertical: spacing.o,
  },
  avatarImage: {
    backgroundColor: colors.baseText,
  },
  avatarText: {fontSize: fontSize.l},
}));
