import {StyleSheet} from 'react-native';
import {horizontalScale} from 'styles/mixins';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    width: horizontalScale(350),
    paddingTop: 30,
  },
  disabled: {
    opacity: 0.5,
  },
});
