import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/svg/FlatLogo.svg';
import MailIcon from '../../assets/svg/mail.svg';
import KeyIcon from '../../assets/svg/key.svg';
import EyeIcon from '../../assets/svg/eye-off.svg';
import FacebookIcon from '../../assets/svg/Facebook.svg';
import GoogleIcon from '../../assets/svg/Google.svg';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const {width} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();

  const [endpoint, setEndpoint] = useState(
    'https://niishcloud.com/task-api/api/task/v1/login',
  );
  const [email, setEmail] = useState('demo@niishcloud.com');
  const [password, setPassword] = useState('Demo@user#123React');
  const [isSelected, setSelection] = useState(false);
  const [passwordEntry, setPasswordEntry] = useState(true);

  const onLogin = async () => {
    const data = {
      email,
      password,
    };
    try {
      await axios({
        method: 'post',
        url: endpoint,
        data,
      }).then(response => {
        console.log(response.data);
        if (response.data) {
          navigation.navigate('Account');
        }
      });
    } catch (error) {
      console.log(error);
      navigation.navigate('Account');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1}}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.logoView}>
          <Logo />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text1}>Log into your account</Text>
          <View style={styles.textView2}>
            <Text style={styles.text2}>
              Enter your email and password to access your account or create an
              account.
            </Text>
          </View>
        </View>
        <View style={{padding: 20, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#FF8137',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <MailIcon />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="'rgba(17, 45, 66, 0.69)'"
              value={email}
              onChangeText={e => setEmail(e)}
              style={styles.input}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#FF8137',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <KeyIcon />
            <TextInput
              placeholder="Password"
              secureTextEntry={passwordEntry}
              placeholderTextColor={'rgba(17, 45, 66, 0.69)'}
              value={password}
              onChangeText={e => setPassword(e)}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setPasswordEntry(prev => !prev)}>
              <EyeIcon />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={val => setSelection(val)}
              tintColors={{
                true: 'rgba(17, 45, 66, 0.5)',
                false: 'rgba(17, 45, 66, 0.5)',
              }}
            />
            <Text
              style={{
                ...styles.text2,
                fontSize: 16,
                color: 'rgba(17, 45, 66, 0.69)',
                marginLeft: 20,
              }}>
              Remember me
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={onLogin}
              style={{
                backgroundColor: '#112D42',
                height: 48,
                width: 289,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  ...styles.text2,
                  color: '#ffffff',
                  marginTop: 7,
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity>
              <Text style={{...styles.text2, color: '#FF8137'}}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              ...styles.text2,
              fontSize: 16,
              color: 'rgba(17, 45, 66, 0.69)',
            }}>
            - Or continue with -
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'rgba(17, 45, 66, 0.45)',
              borderRadius: 8,
              width: 163,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <FacebookIcon />
            <Text
              style={{
                ...styles.text2,
                fontSize: 18,
                color: '#112D42',
              }}>
              {' '}
              Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'rgba(17, 45, 66, 0.45)',
              borderRadius: 8,
              width: 163,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <GoogleIcon />
            <Text
              style={{
                ...styles.text2,
                fontSize: 18,
                color: '#112D42',
              }}>
              {' '}
              Google
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{...styles.text2, color: 'rgba(17, 45, 66, 0.62)'}}>
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity style={{marginLeft: 20, marginBottom: 30}}>
            <Text style={{...styles.text2, color: '#FF8137'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    height: '100%',
    width: width,
    backgroundColor: '#FFFFFF',
  },
  logoView: {
    padding: 20,
    alignContent: 'center',
    alignSelf: 'center',
  },
  textView: {
    marginTop: 10,
    alignItems: 'center',
  },
  textView2: {
    marginTop: 10,
    alignItems: 'center',
    width: 298,
  },
  text1: {
    fontFamily: 'Rasa-Regular',
    fontWeight: 'bold',
    color: '#112D42',
    fontSize: 32,
  },
  text2: {
    fontFamily: 'Rasa-Regular',
    fontWeight: '500',
    color: '#112D42',
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    width: width / 1.5,
    paddingHorizontal: 20,
    fontFamily: 'Rasa-Regular',
    fontWeight: '600',
    color: '#112D42',
    fontSize: 22,
  },
  checkBox: {
    borderColor: 'rgba(17, 45, 66, 0.5)',
    alignItems: 'center',
  },
});
