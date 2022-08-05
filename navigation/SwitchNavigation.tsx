import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticatedRoutesParamsList} from '../types/navigation';
import {
  NavigationContainer,
  RouteProp,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Landing from '../src/screens/public/Landing';

export type LoggedInState = 'initializing' | 'loggedIn' | 'loggedOut';

type BlogProps = NativeStackNavigationProp<
  AuthenticatedRoutesParamsList,
  'Rolodex'
>;

type RolodexRouteProp = RouteProp<AuthenticatedRoutesParamsList, 'Rolodex'>;

type Props = {
  navigation: BlogProps;
  route: RolodexRouteProp;
};

const SwitchNavigation = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState<LoggedInState>('loggedIn');

  const navigationRef = useNavigationContainerRef();

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {isUserLoggedIn === 'initializing' && <Landing />}
        {/* {isUserLoggedIn === 'loggedIn' && <AuthenticatedRoutes />}
        {isUserLoggedIn === 'loggedOut' && <UnauthenticatedRoutes />} */}
      </NavigationContainer>
    </>
  );
};

export default SwitchNavigation;

const styles = StyleSheet.create({});
