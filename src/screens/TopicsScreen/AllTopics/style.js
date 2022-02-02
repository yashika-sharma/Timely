import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';

export default (styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  heading: {
    alignSelf: 'stretch',
    marginHorizontal: spacing.l,
    padding: spacing.sm,
    borderBottomWidth: spacing.o,
    borderColor: colors.shadowColor,
    marginTop: spacing.l,
  },
  headingText: {
    fontSize: fontSize.l,
    color: colors.count,
    fontFamily: 'Verdana',
    alignSelf: 'stretch',
    fontWeight: '400',
  },
  topicText: {
    fontSize: fontSize.sl,
    color: colors.white,
  },
  topicsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    //paddingRight: spacing.l,
    padding: spacing.m,
  },
  topic: {
    backgroundColor: colors.baseDark,
    padding: spacing.ml,
    borderRadius: spacing.xl,
    margin: spacing.s,
  },
}));
