import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import fontSize from '../../../constants/fontSize';

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  addButton: {
    alignSelf: 'stretch',
    padding: spacing.ml,
    borderRadius: spacing.ml,
    backgroundColor: colors.baseMedium,
    alignItems: 'center',
    margin: spacing.sm,
  },
  addText: {
    fontSize: fontSize.sl,
    color: colors.white,
  },
  topicText: {
    fontSize: fontSize.sl,
    fontFamily: 'Verdana',
    fontStyle: 'italic',
    alignSelf: 'stretch',
    color: colors.baseText,
    textAlign: 'center',
    padding: spacing.ml,
  },
  topicContainer: {
    borderRadius: spacing.sm,
    alignSelf: 'stretch',
    borderBottomWidth: spacing.o,
    marginHorizontal: spacing.s,
    borderBottomColor: colors.expGreen,
    backgroundColor: colors.white,
  },
  error: {
    color: colors.error,
    fontSize: fontSize.sl,
    paddingLeft: spacing.m,
    backgroundColor: colors.white,
  },
  searchbarStyle: {
    backgroundColor: colors.white,
  },
  searchbarInputStyle: {
    backgroundColor: colors.shadowColor,
  },
}));
