import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';

export default (styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xxl,
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  heading: {
    fontSize: fontSize.ml,
    fontFamily: 'Verdana',
    fontWeight: '400',
  },
  error: {
    color: colors.error,
    fontSize: fontSize.sl,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginTop: spacing.sm,
  },
  profile: {
    alignSelf: 'stretch',
    padding: spacing.l,
  },
  label: {
    fontSize: fontSize.m,
    fontFamily: 'Verdana',
    color: colors.baseText,
    flex: 1,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: fontSize.xl,
    color: colors.count,
  },
  dateInput: {
    borderBottomWidth: spacing.xxs,
    marginBottom: spacing.sm,
    width: '100%',
  },
  labelContainer: {
    marginTop: spacing.ml,
    marginBottom: spacing.sm,
    flexDirection: 'row',
  },
  imageContainer: {
    paddingBottom: spacing.l,
    padding: spacing.ml,
    borderBottomWidth: spacing.s,
    borderColor: colors.baseDark,
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 115,
    backgroundColor: colors.lightgrey,
    borderWidth: spacing.m,
    borderColor: colors.baseLight,
  },
  openButton: {
    borderRadius: spacing.xl,
    padding: spacing.ml,
    elevation: spacing.xxs,
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: spacing.l,
    textAlign: 'center',
  },
  imagePopup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicText: {
    fontSize: fontSize.ml,
    padding: spacing.sm,
    marginVertical: spacing.s,
    fontFamily: 'Verdana',
  },
  textContainer: {
    padding: spacing.ml,
    marginVertical: spacing.sm,
    borderRadius: spacing.ml,
  },
  text: {
    fontSize: fontSize.l,
  },
  editProfile: {
    fontSize: fontSize.sl,
    textAlign: 'center',
    color: colors.white,
  },
  editProfileContainer: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    marginTop: spacing.sm,
    padding: spacing.ml,
    borderRadius: spacing.m,
    backgroundColor: colors.baseText,
    marginHorizontal: spacing.ml,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: spacing.p6,
    shadowRadius: spacing.xxs,
    elevation: spacing.m,
    color: colors.white,
  },
  icons: {
    color: colors.baseDark,
  },
  emptyErrorContainer: {
    alignSelf: 'stretch',
    paddingVertical: spacing.m,
    backgroundColor: colors.errorBg,
    borderRadius: spacing.sm,
    borderWidth: spacing.p8,
    borderColor: colors.errorBorder,
    marginHorizontal: spacing.ml,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyError: {
    color: colors.errorText,
    fontSize: fontSize.sl,
    marginHorizontal: spacing.m,
  },
  head: {
    flexDirection: 'row',
  },
  rightCol: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  news: {
    padding: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rss: {
    padding: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: fontSize.l,
    color: colors.baseDark,
    fontWeight: 'bold',
  },
  countLabel: {
    fontSize: fontSize.sl,
    fontFamily: 'Verdana',
    color: colors.count,
    fontWeight: '400',
  },

  leftCol: {
    alignItems: 'center',
  },
  name: {
    fontSize: fontSize.l,
    marginTop: spacing.ml,
    color: colors.count,
  },
}));
