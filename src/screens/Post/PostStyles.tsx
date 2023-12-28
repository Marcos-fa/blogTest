import {StyleSheet} from 'react-native';
import {Colors, Typography} from 'styles/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginBottom: 8,
  },
  content: {
    fontSize: Typography.FONT_SIZE_16,
    marginBottom: 8,
  },
  author: {
    fontSize: Typography.FONT_SIZE_12,
    marginBottom: 4,
    fontFamily: Typography.FONT_FAMILY_ITALIC,
    color: Colors.SECONDARY,
  },
  date: {
    fontSize: 12,
    color: Colors.SECONDARY,
  },
});
