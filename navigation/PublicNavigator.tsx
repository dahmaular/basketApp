import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Landing from '../src/screens/public/Landing';
import LoginScreen from '../src/screens/public/Login';
import Welcome from '../src/screens/public/Welcome';

const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default PublicNavigator;
