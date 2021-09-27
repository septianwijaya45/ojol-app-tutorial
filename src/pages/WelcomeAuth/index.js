import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImgWelcomeAuth} from '../../assets';
import {colors} from '../../utils/colors';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
  const navigation = useNavigation();
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <ImgWelcomeAuth style={styles.wrapper.logo} />
      <Text style={styles.text.welcome}>Welcome Auth</Text>
      <ActionButton
        title="Have an account? Login Here"
        button="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <ActionButton
        title="Or create account"
        button="Register"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    logo: {
      width: 219,
      height: 117,
      marginBottom: 33,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text.default,
      marginBottom: 71,
    },
  },
};

export default WelcomeAuth;
