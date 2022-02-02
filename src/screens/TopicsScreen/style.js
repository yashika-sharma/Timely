import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import fontSize from '../../constants/fontSize';
import colors from '../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.l,
    backgroundColor: colors.white,
    flex: 1,
  },
  heading: {
    alignSelf: 'stretch',
    marginHorizontal: spacing.l,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderBottomWidth: spacing.o,
    borderColor: colors.shadowColor,
    marginTop: spacing.l,
    marginBottom: spacing.sm,
  },
  headingText: {
    fontSize: fontSize.l,
    color: colors.count,
    fontFamily: 'Verdana',
    alignSelf: 'stretch',
    fontWeight: '400',
  },
  topic: {
    padding: spacing.m,
    paddingLeft: spacing.ml,
    borderRadius: spacing.xxl,
    margin: spacing.s,
    borderColor: colors.baseMedium,
    borderWidth: spacing.p6,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  topicText: {
    color: colors.baseDark,
    fontSize: fontSize.sl,
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  topicTextDelete: {
    color: colors.topicTextDelete,
    fontSize: fontSize.l,
  },
  topicsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: spacing.sm,
  },
  footer: {
    marginTop: spacing.g,
    height: 100,
    alignSelf: 'stretch',
    padding: spacing.l,
  },
  messageContainer: {
    paddingHorizontal: spacing.l,
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
  message: {
    fontSize: fontSize.l,
    color: colors.errorBorder,
    fontStyle: 'italic',
  },
  emptyPic: {
    marginVertical: spacing.m,
    opacity: spacing.p7,
  },
}));
