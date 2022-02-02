import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import spacing from '../../../constants/spacing';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
    paddingTop: spacing.l,
    backgroundColor: colors.white,
  },
  inputStyle: {
    borderBottomWidth: spacing.o,
    height: 50,
    backgroundColor: colors.inputStyleGrey,
    fontSize: fontSize.l,
    borderRadius: spacing.sm,
  },
  label: {
    fontSize: fontSize.l,
    marginBottom: spacing.sm,
    color: colors.popUpBase,
  },
  error: {
    color: colors.error,
    fontSize: fontSize.sl,
    marginVertical: spacing.ml,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: spacing.p3,
    marginBottom: spacing.m,
  },
  fail: {
    alignSelf: 'center',
  },
  errorFail: {
    color: colors.error,
    fontSize: fontSize.l,
    marginVertical: spacing.ml,
  },
}));
