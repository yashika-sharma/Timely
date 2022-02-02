import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import fontSize from '../../constants/fontSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.m,
    backgroundColor: colors.white,
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
  inputField: {
    fontSize: fontSize.sl,
    height: 160,
    backgroundColor: colors.lightestGrey,
    borderWidth: spacing.xxs,
    borderColor: colors.baseMedium,
    borderRadius: spacing.m,
    padding: spacing.ml,
    paddingTop: spacing.l,
  },
  inputView: {
    marginBottom: spacing.l,
  },
  addButtonText: {
    fontSize: fontSize.ml,
    color: colors.white,
    fontWeight: '500',
  },
  addButton: {
    padding: spacing.l,
    backgroundColor: colors.baseText,
    alignSelf: 'stretch',
    borderRadius: spacing.m,
    marginTop: spacing.m,
    alignItems: 'center',
  },
  complaintView: {
    alignSelf: 'stretch',
    borderWidth: spacing.xxs,
    borderRadius: spacing.m,
    marginVertical: spacing.sm,
    padding: spacing.m,
    borderColor: colors.baseMedium,
  },
  headingView: {
    alignSelf: 'stretch',
    padding: spacing.ml,
    backgroundColor: colors.lighterGrey,
    marginVertical: spacing.m,
  },
  heading: {
    fontSize: fontSize.l,
  },
  foot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  head: {
    backgroundColor: colors.lightestGrey,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.l,
    borderRadius: spacing.sm,
  },
  buttonBg: {
    paddingHorizontal: spacing.ml,
    paddingTop: spacing.m,
  },
  footRight: {
    flexDirection: 'row',
  },
  time: {
    fontSize: fontSize.ml,
    color: colors.grey,
  },
  complaint: {
    fontSize: fontSize.ml,
    color: colors.count,
  },
  error: {
    fontSize: fontSize.ml,
    color: colors.error,
    paddingVertical: spacing.m,
  },
});

export default styles;
