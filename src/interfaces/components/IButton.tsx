import {ViewStyle} from 'react-native';

export interface AddButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}
