import {ColorValue, ViewStyle} from 'react-native';

export interface InputProps {
  placeholder?: string;
  value: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  customStyle?: ViewStyle;
  error?: boolean;
  placeholderTextColor?: ColorValue;
}
