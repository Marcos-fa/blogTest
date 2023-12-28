import {StyleSheet} from 'react-native';
import {Colors} from 'styles/index';
import {horizontalScale, verticalScale} from 'styles/mixins';

export default StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: Colors.PRIMARY,
    marginLeft: 10,
    width: horizontalScale(34),
    height: verticalScale(34),
  },
  icon: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.WHITE,
    lineHeight: 35,
  },
});
