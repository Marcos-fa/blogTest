import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'styles/index';
import {horizontalScale, verticalScale} from 'styles/mixins';

export default StyleSheet.create({
  input: {
    width: horizontalScale(350),
    height: verticalScale(Platform.OS === 'ios' ? 35 : 40),
    borderRadius: 15,
    borderColor: Colors.GRAY_DARK,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
