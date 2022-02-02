import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';

export default (styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: '5%',
    alignItems: 'center',
    alignSelf: 'center',
    borderLeftWidth: spacing.ml,
    marginHorizontal: spacing.ml,
    borderRadius: spacing.sm,
    borderColor: colors.base,
    shadowColor: colors.count,
    shadowOffset: {width: spacing.z, height: spacing.m},
    shadowOpacity: spacing.p6,
    shadowRadius: spacing.m,
    elevation: spacing.sm,
    flexDirection: 'row',
    backgroundColor: colors.unreadbg,
    paddingHorizontal: spacing.m,
  },
  modalText: {
    fontSize: fontSize.sl,
    padding: spacing.l,
    fontFamily: 'Verdana',
    color: colors.black,
  },
}));
