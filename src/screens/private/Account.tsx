import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import SmallLogo from '../../assets/svg/SmallLogo.svg';
import Search from '../../assets/svg/search.svg';
import Menu from '../../assets/svg/HB Menu.svg';
import HeaderOrange from '../../assets/svg/AccountRectangle.svg';
import ProfileImage from '../../assets/svg/image.svg';
import Noty from '../../assets/svg/Bell.svg';
import User from '../../assets/svg/Registration.svg';
import Star from '../../assets/svg/Star Filled.svg';
import History from '../../assets/svg/Activity History.svg';
import Tracker from '../../assets/svg/Tracking.svg';
import Card from '../../assets/svg/Card Payment.svg';
import Settings from '../../assets/svg/Gear.svg';
import Logout from '../../assets/svg/Export.svg';

const {width, height} = Dimensions.get('window');

const MENU = [
  {
    id: 1,
    title: 'Notification',
    icon: <Noty />,
  },
  {
    id: 2,
    title: 'Edit profile',
    icon: <User />,
  },
  {
    id: 3,
    title: 'Wishlist',
    icon: <Star />,
  },
  {
    id: 4,
    title: 'Order history',
    icon: <History />,
  },
  {
    id: 5,
    title: 'Track order',
    icon: <Tracker />,
  },
  {
    id: 6,
    title: 'Payment option',
    icon: <Card />,
  },
  {
    id: 7,
    title: 'Settings',
    icon: <Settings />,
  },
  {
    id: 8,
    title: 'Log out',
    icon: <Logout />,
  },
];

const AccountScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SmallLogo style={{marginRight: 20}} />
          <View style={styles.searchView}>
            <Search />
            <TextInput
              placeholder="Search in basket"
              placeholderTextColor="rgba(17, 45, 66, 0.69)"
              value={search}
              style={styles.input}
            />
          </View>
          <View style={{alignContent: 'center'}}>
            <Menu />
          </View>
        </View>
      </View>
      <View>
        <HeaderOrange
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 16,
            bottom: 0,
          }}
        />
        <View
          style={{
            marginTop: 20,
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 20}}>
            <ProfileImage />
          </View>
          <View>
            <Text style={styles.name}>Daniel Obi</Text>
            <Text style={styles.email}>danielobi@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuList}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <FlatList
            data={MENU}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View style={styles.icon}>{item.icon}</View>
                <TouchableOpacity>
                  <Text style={styles.menuItem}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#112D42',
  },
  searchView: {
    flexDirection: 'row',
    width: width / 1.6,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 20,
  },
  input: {
    width: width / 2.5,
    height: 40,
    fontFamily: 'Rasa-Regular',
    fontWeight: '600',
    color: '#112D42',
    fontSize: 12,
    // marginTop: 10,
    textAlign: 'center',
  },
  name: {
    fontFamily: 'Rasa-Regular',
    fontSize: 26,
    color: '#112D42',
    fontWeight: '600',
  },
  email: {
    fontFamily: 'Rasa-Regular',
    fontSize: 18,
    color: '#112D42',
    fontWeight: '600',
  },
  menuList: {
    backgroundColor: '#ffffff',
    width: width / 1.2,
    height: height / 1.1,
    alignSelf: 'center',
    borderRadius: 8,
  },
  menuItem: {
    color: '#112D42',
    fontFamily: 'Rasa-Regular',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
  },
  icon: {
    marginRight: 30,
  },
});
