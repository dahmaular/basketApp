import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import TabNavigator from './Authenticated';
import PublicNavigator from './PublicNavigator';

const Main = () => {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default Main;
