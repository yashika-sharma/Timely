import {StyleSheet, Platform} from 'react-native';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  c: {
    //flex: 1,
    //paddingTop: spacing.xl,
    justifyContent: 'center',
  },
  email: {
    backgroundColor: colors.inputStyleGrey,
    padding: spacing.m,
    marginHorizontal: spacing.l,
    marginTop: spacing.sm,
    borderBottomWidth: spacing.xxs,
    alignSelf: 'stretch',
    fontSize: fontSize.l,
    borderRadius: spacing.s,
  },
  password: {
    backgroundColor: colors.inputStyleGrey,
    padding: spacing.m,
    marginTop: spacing.sm,
    marginHorizontal: spacing.l,
    borderBottomWidth: spacing.xxs,
    fontSize: fontSize.l,
    borderRadius: spacing.s,
  },
  submit: {
    backgroundColor: colors.baseText,
    borderRadius: spacing.m,
    paddingVertical: spacing.ml,
    paddingHorizontal: spacing.xxl,
    alignSelf: 'center',
    borderWidth: spacing.p6,
  },
  submit2: {
    borderRadius: spacing.l,
    paddingTop: spacing.l,
    paddingHorizontal: spacing.s,
    alignSelf: 'center',
  },
  heading: {
    fontSize: fontSize.xxl,
    color: colors.baseDark,
    fontFamily: 'Verdana',
    marginBottom: spacing.l,
    alignSelf: 'center',
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: spacing.l,
    marginTop: spacing.xl,
  },
  formContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: fontSize.l,
    fontFamily: 'Verdana',
    color: colors.baseDark,
    paddingLeft: spacing.l,
  },
  error: {
    fontSize: fontSize.sl,
    color: colors.error,
    padding: spacing.ml,
    borderRadius: spacing.l,
  },
  errorContainer: {
    alignSelf: 'stretch',
    marginHorizontal: spacing.l,
  },
  submitContainer: {
    padding: spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    paddingLeft: spacing.l,
    fontSize: fontSize.l,
    color: colors.baseText,
    paddingVertical: spacing.l,
  },
  submitText: {
    fontSize: fontSize.sl,
    color: colors.white,
  },
  submitText2: {
    fontSize: fontSize.l,
    color: colors.baseDark,
  },
  footer: {
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 120,
  },
  inlineError: {
    paddingLeft: spacing.l,
    color: colors.error,
    fontSize: spacing.sl,
    marginBottom: spacing.ml,
    marginTop: spacing.s,
  },
}));
