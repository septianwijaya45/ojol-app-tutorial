import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  }, []);
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
