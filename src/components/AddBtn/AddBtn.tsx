import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './AddBtnStyles';
import {AddButtonProps} from 'interfaces/components/IButton';

const AddButton: React.FC<AddButtonProps> = ({onPress, disabled, style}) => {
  const disableStyle = disabled ? {opacity: disabled ? 0.5 : 1} : {};
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style, disableStyle]}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
