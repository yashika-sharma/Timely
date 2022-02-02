import {StyleSheet} from 'react-native';
import spacing from '../../constants/spacing';
import fontSize from '../../constants/fontSize';
import colors from '../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    //padding: spacing.m,
    backgroundColor: colors.white,
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.modalCenteredView,
    padding: spacing.sm,
  },
  modalView: {
    margin: spacing.xl,
    backgroundColor: colors.white,
    borderRadius: spacing.l,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: spacing.l,
    padding: spacing.l,
  },
  openButton: {
    backgroundColor: colors.base,
    borderRadius: spacing.ml,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.ml,
    marginVertical: spacing.ml,
    paddingHorizontal: spacing.ml,
    alignSelf: 'stretch',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSize.l,
    color: colors.white,
  },
  modalText: {
    marginBottom: spacing.ml,
    textAlign: 'center',
    fontSize: fontSize.l,
    padding: spacing.ml,
    alignSelf: 'stretch',
    borderRadius: spacing.ml,
  },
  delete: {
    marginLeft: spacing.ml,
  },
  rss: {
    fontSize: fontSize.l,
    fontFamily: 'Verdana',
  },
  message: {
    alignSelf: 'center',
    fontStyle: 'italic',
    fontFamily: 'Verdana',
    fontSize: fontSize.ml,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.ml,
  },
  notice: {
    alignSelf: 'flex-start',
    fontSize: fontSize.ml,
    padding: spacing.sm,
  },
  loading: {
    marginVertical: spacing.sm,
  },
  inputStyle: {
    backgroundColor: colors.inputStyleGrey,
    borderWidth: 2,
    borderColor: colors.shadowColor,
    padding: spacing.ml,
    alignSelf: 'stretch',
    borderRadius: spacing.ml,
    fontSize: fontSize.sl,
  },
  error: {
    color: colors.error,
    fontSize: fontSize.sl,
    padding: spacing.sm,
  },
  modalMid: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  modalFoot: {
    flexDirection: 'row',
    paddingHorizontal: spacing.sm,
  },
  alertIcon: {
    padding: spacing.sm,
  },
  emptyPic: {
    marginBottom: spacing.m,
    opacity: spacing.p7,
  },
}));
