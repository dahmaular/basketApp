import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Bg from '../../assets/image/bg.jpg';
import Overlay from '../../assets/svg/overlay.svg';
import Logo from '../../assets/svg/Logo.svg';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Landing = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Bg} style={styles.container}>
      <Overlay style={styles.overlay} />
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.logoText}>Start Shopping.</Text>
        <Text style={styles.logoText}>Stay Happy.</Text>
        <Text style={styles.logoText}>Anytime.</Text>
        <View style={{marginTop: 80}}>
          <Text style={styles.footerText}>Basket Online Marketplace</Text>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.footerText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.footerText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    position: 'relative',
  },
  overlay: {height, width},
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height / 3.5,
    position: 'absolute',
  },
  logoText: {
    fontFamily: 'Rasa-Regular',
    fontWeight: '400',
    fontSize: 32,
  },
  footerText: {
    fontFamily: 'Rasa-Bold',
    color: '#FF8137',
    fontSize: 25,
    lineHeight: 30,
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-between',
    padding: 15,
    width,
  },
});
