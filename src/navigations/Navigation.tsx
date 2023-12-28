import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import NewPost from 'screens/NewPost';
import PostScreen from 'screens/Post';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
