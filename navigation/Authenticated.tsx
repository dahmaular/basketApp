import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AccountScreen from '../src/screens/private/Account';
import Home from '../src/assets/svg/Home.svg';
import Saved from '../src/assets/svg/Star 1.svg';
import User from '../src/assets/svg/User.svg';
import Cart from '../src/assets/svg/Cart.svg';

const Tab = createBottomTabNavigator();

interface TabContainerProps {
  label?: string;
  focused?: boolean;
  color: string;
}

const TabContainer: React.FunctionComponent<TabContainerProps> = ({
  children,
  label,
  focused,
}) => (
  <>
    {focused ? (
      <View style={styles.tab}>
        {children}
        <Text style={{...styles.labelText, color: '#316F8A'}}>{label}</Text>
      </View>
    ) : (
      <View
        style={{width: '100%', alignItems: 'center', flex: 1, paddingTop: 15}}>
        {children}
        <Text style={{...styles.labelText, color: '#8C8C8C'}}>{label}</Text>
      </View>
    )}
  </>
);

// const TabIcon = {
//     Home: <Home />,
//     Saved: <Saved />,
//     Account: <User />,
//     Cart: <Cart />
//   };

//   const createScreenOptions = ({ route }) => {
//     const iconName = TabIcon[route.name];
//     return {
//       tabBarIcon: ({ size, color }) => (
//         <TabContainer label={label} focused={focused} color={color}>
//               {label == 'Home' && <Home />}

//               {label == 'Saved' && <Saved />}

//               {label == 'Contacts' && <User />}

//               {label == 'Profile' && <Cart />}
//             </TabContainer>
//       ),
//     };
//   };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="AccountScreen"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 50,
          position: 'absolute',
        },
        tabBarShowLabel: true,
      })}>
      <Tab.Screen
        name="Home"
        component={() => null}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Home />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={() => null}
        options={{
          headerShown: false,
          tabBarLabel: 'Saved',
          tabBarIcon: ({color}) => <Saved />,
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => <User />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={() => null}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => <Cart />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: '#316F8A',
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
  },
  labelText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 6,
  },
});
