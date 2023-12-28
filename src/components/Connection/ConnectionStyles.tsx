import {StyleSheet} from 'react-native';
import {Colors, Typography} from 'styles/index';
import {horizontalScale, verticalScale} from 'styles/mixins';

export default StyleSheet.create({
  container: {
    width: horizontalScale(375),
    height: verticalScale(40),
    backgroundColor: Colors.ALERT,
    paddingTop: 5,
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
  },
});
