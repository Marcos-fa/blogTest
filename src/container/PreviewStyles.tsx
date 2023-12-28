import {StyleSheet} from 'react-native';
import {horizontalScale} from 'styles/mixins';

export default StyleSheet.create({
  item: {
    paddingBottom: 20,
  },
  flatlist: {
    flex: 1,
    width: horizontalScale(375),
    marginTop: 10,
  },
});
