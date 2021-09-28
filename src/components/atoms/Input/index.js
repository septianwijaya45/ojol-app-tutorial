import {placeholder} from '@babel/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';

const Input = ({placeholder}) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

export default Input;

const styles = {
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
  },
};
