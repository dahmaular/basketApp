import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/FlatLogo.svg';
import FamilyImage from '../../assets/svg/Family-with-Kids.svg';
import ArrowIcon from '../../assets/svg/ArrowIcon.svg';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.textView}>
        <Text style={styles.welcomeText1}>Welcome to</Text>
        <Text style={styles.welcomeText2}>basket online store</Text>
        <Text style={styles.welcomeText3}>
          basket is the no1 online store for
        </Text>
        <Text style={styles.welcomeText3}>both new and used products</Text>
      </View>
      <View>
        <FamilyImage />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{...styles.welcomeText3, fontWeight: '500'}}>
          GET STARTED
        </Text>
        <ArrowIcon style={styles.arrow} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112D42',
    alignItems: 'center',
  },
  logoView: {
    padding: 10,
    alignContent: 'center',
    alignSelf: 'center',
  },
  textView: {
    alignItems: 'center',
    marginTop: 10,
    width,
  },
  welcomeText1: {
    fontFamily: 'Rasa-Regular',
    fontWeight: '400',
    fontSize: 28,
    color: '#ffffff',
  },
  welcomeText2: {
    fontFamily: 'Rasa-Regular',
    fontWeight: '700',
    fontSize: 40,
    color: '#ffffff',
  },
  welcomeText3: {
    fontFamily: 'Rasa-Regular',
    fontSize: 22,
    color: '#ffffff',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FF8137',
    borderRadius: 5,
    padding: 10,
    height: 45,
    width: width / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {position: 'absolute', right: 20},
});
