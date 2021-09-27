import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {imgWelcomeAuth} from '../../assets';
import {colors} from '../../utils/colors';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={imgWelcomeAuth} style={styles.wrapper.logo} />
      <Text style={styles.text.welcome}>Welcome Auth</Text>
      <ActionButton title="Have an account? Login Here" button="Login" />
      <ActionButton title="Or create account" button="Register" />
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
