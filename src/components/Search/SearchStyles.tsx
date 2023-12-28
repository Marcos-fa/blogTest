import {StyleSheet} from 'react-native';
import {Colors, Typography} from 'styles/index';
import {horizontalScale, verticalScale} from 'styles/mixins';

export default StyleSheet.create({
  container: {
    width: horizontalScale(350),
    height: verticalScale(100),
    alignSelf: 'center',
  },
  top: {
    flexDirection: 'row',
  },
  searchInput: {
    width: horizontalScale(300),
    height: verticalScale(40),
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  filter: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: horizontalScale(85),
    alignItems: 'center',
  },
  filterBy: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textAlign: 'center',
    padding: 2,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.SECONDARY,
  },
});
