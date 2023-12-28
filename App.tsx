import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from 'navigations/Navigation';
import Connection from 'components/Connection/Connection';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <Connection />
    </NavigationContainer>
  );
}
