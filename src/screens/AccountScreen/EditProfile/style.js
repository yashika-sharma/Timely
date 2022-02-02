import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import spacing from '../../../constants/spacing';

export default (styles = StyleSheet.create({
  container: {
    padding: spacing.ml,
    backgroundColor: colors.white,
  },
  modalContainer: {
    backgroundColor: colors.white,
    //borderRadius: spacing.l,
    margin: spacing.l,
  },
  inputStyle: {
    fontSize: fontSize.l,
    alignSelf: 'stretch',
    backgroundColor: colors.inputStyleGrey,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderRadius: spacing.m,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    opacity: spacing.p7,
    borderWidth: spacing.p7,
  },

  message: {
    fontSize: fontSize.l,
  },
  changePic: {
    alignSelf: 'center',
    fontFamily: 'Verdana',
  },
  label: {
    fontSize: fontSize.l,
    fontWeight: '400',
    marginBottom: spacing.s,
    color: colors.popUpBase,
  },
  error: {
    color: colors.error,
    fontSize: fontSize.sl,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginTop: spacing.sm,
  },
  nameError: {
    fontSize: fontSize.ml,
    color: 'red',
    marginVertical: spacing.s,
  },
  inputStyle2: {
    fontSize: fontSize.l,
    backgroundColor: colors.inputStyleGrey,
    flex: 1,
    padding: spacing.l,
    alignItems: 'center',
    marginBottom: spacing.ml,
  },
  activityIndicator: {
    marginRight: spacing.sm,
  },
  iconStyle: {
    position: 'absolute',
    top: '27%',
    left: '55%',
  },
  modalStyle: {
    marginHorizontal: spacing.l,
    backgroundColor: colors.transparentWhite,
  },
  logoPic: {
    alignSelf: 'center',
    opacity: spacing.p4,
    marginTop: spacing.xl,
  },
}));
