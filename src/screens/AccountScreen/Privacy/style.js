import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import spacing from '../../../constants/spacing';

export default (styles = StyleSheet.create({
  privacy: {
    paddingTop: spacing.xl,
    padding: spacing.l,
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: fontSize.sl,
    fontFamily: 'Verdana',
    alignSelf: 'stretch',
    fontWeight: '400',
    color: colors.count,
  },
  emailRow: {
    flexDirection: 'row',
    marginTop: spacing.ml,
  },
  email: {
    fontSize: fontSize.ml,
    fontFamily: 'Verdana',
    color: colors.baseDark,
    marginLeft: spacing.sm,
  },
  email2: {
    fontSize: fontSize.l,
    marginBottom: spacing.xl,
    color: colors.change,
  },
  changeAccount: {
    fontSize: fontSize.l,
    marginBottom: spacing.m,
    fontWeight: '400',
    fontFamily: 'Verdana',
    color: colors.count,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lighterGrey,
    paddingVertical: spacing.s,
    paddingLeft: spacing.s,
    borderRadius: spacing.sm,
    justifyContent: 'space-between',
    paddingRight: spacing.sm,
  },

  signOut: {
    flexDirection: 'row',
    backgroundColor: colors.lighterGrey,
    paddingVertical: spacing.s,
    paddingLeft: spacing.s,
    fontSize: fontSize.l,
    fontWeight: '400',
    fontFamily: 'Verdana',
    color: colors.count,
    marginLeft: spacing.s,
    alignItems: 'center',
    borderRadius: spacing.sm,
    justifyContent: 'space-between',
    paddingRight: spacing.sm,
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationOuter: {
    flexDirection: 'row',
    marginBottom: spacing.l,
  },
  notifsView: {
    flexDirection: 'row',
  },
  notifsLabel: {
    fontSize: fontSize.l,
    color: colors.black,
  },
  notifsLabelValue: {
    color: colors.baseText,
    fontWeight: '600',
    fontSize: fontSize.l,
  },
  notifsChange: {
    fontSize: fontSize.sl,
    color: colors.baseText,
    fontStyle: 'italic',
  },
  switch: {
    transform: [{scaleX: 0.75}, {scaleY: 0.75}],
  },
}));
