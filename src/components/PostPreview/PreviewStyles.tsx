import {StyleSheet} from 'react-native';
import {Colors, Typography} from 'styles/index';
import {horizontalScale, verticalScale} from 'styles/mixins';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: horizontalScale(350),
    height: verticalScale(120),
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: Typography.FONT_FAMILY_ITALIC,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.GRAY_DARK,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
  author: {
    fontFamily: Typography.FONT_FAMILY_ITALIC,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.GRAY_DARK,
    paddingBottom: 10,
  },
  content: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    height: verticalScale(50),
  },
});
