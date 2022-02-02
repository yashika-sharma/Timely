import {StyleSheet} from 'react-native';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

export default (styles = StyleSheet.create({
  modalStyle: {
    borderRadius: spacing.xl,
    marginHorizontal: spacing.l,
    backgroundColor: colors.transparentWhite,
    padding: spacing.ml,
  },
}));
