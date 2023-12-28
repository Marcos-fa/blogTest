import React from 'react';
import {TextInput} from 'react-native';
import {Colors} from 'styles/index';
import styles from './InputStyles';
import {InputProps} from 'interfaces/components/ITextInput';

const Input: React.FC<InputProps> = ({
  value,
  error,
  onChangeText,
  placeholder,
  customStyle,
  placeholderTextColor,
}) => {
  const errorStyle = error ? {borderColor: Colors.ALERT} : null;
  return (
    <TextInput
      style={[styles.input, errorStyle, customStyle]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline
      placeholderTextColor={placeholderTextColor || Colors.SECONDARY}
    />
  );
};

export default Input;
