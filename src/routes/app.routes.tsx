import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {InsertOccurrence} from '../screens/InsertOccurrence';
const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Screen name="Home" component={Home} />
      <Screen name="InsertOccurrence" component={InsertOccurrence} />
    </Navigator>
  );
}
