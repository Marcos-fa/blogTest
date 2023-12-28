import {Button, Text, View} from 'react-native';
import React from 'react';
import AppStore from 'stores/AppStore';
import styles from './HomeStyles';

const Counter = () => {
  const {count, inc, dec} = AppStore();
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={inc} title="Increment" />
      <Button onPress={dec} title="Decrement" />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Counter />
    </View>
  );
};

export default HomeScreen;
