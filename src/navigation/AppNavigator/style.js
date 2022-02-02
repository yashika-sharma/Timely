import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    //paddingTop: spacing.l,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.ml,
    borderBottomWidth: spacing.xxs,
    borderBottomColor: colors.drawerborder,
    borderRadius: spacing.sm,
    marginBottom: spacing.m,
  },
  logo: {
    opacity: spacing.p9,
    height: 130,
    width: 130,
    borderRadius: 100,
  },

  data: {
    flexDirection: 'row',
    marginTop: spacing.ml,
    justifyContent: 'space-around',
  },
  col: {
    padding: spacing.sm,
    flexDirection: 'row',
    marginHorizontal: spacing.ml,
  },
  name: {
    fontSize: 20,
    paddingTop: 15,
    fontFamily: 'Verdana',
    color: colors.topicAdd,
  },

  count: {
    fontSize: fontSize.l,
    fontWeight: '500',
    marginLeft: spacing.sm,
    color: colors.expBlue,
  },
  label: {
    fontSize: fontSize.l,
    fontFamily: 'Verdana',
    fontWeight: '400',
    color: colors.baseText,
    marginLeft: spacing.l,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.m,
    marginBottom: spacing.ml,
  },
  badge: {
    backgroundColor: colors.errorBorder,
    marginLeft: spacing.m,
    alignSelf: 'center',
    fontSize: fontSize.m,
  },
}));
