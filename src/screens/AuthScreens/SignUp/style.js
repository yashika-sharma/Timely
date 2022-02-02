import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: spacing.xl,
    justifyContent: 'center',
    backgroundColor: colors.white,
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
  confirmPassword: {
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
    marginBottom: spacing.m,
    alignSelf: 'center',
  },
  formContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: fontSize.l,
    fontFamily: 'Verdana',
    color: colors.baseDark,
    paddingLeft: spacing.l,
    //marginTop: spacing.sm,
  },
  submitContainer: {
    //padding: spacing.ml,
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
    width: 100,
    height: 100,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: spacing.l,
    marginTop: spacing.l,
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
  inlineError: {
    paddingLeft: spacing.l,
    color: colors.error,
    fontSize: spacing.sl,
    marginTop: spacing.s,
    marginBottom: spacing.ml,
  },
}));
