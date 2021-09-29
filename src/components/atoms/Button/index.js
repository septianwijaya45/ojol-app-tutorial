import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/colors';
import ButtonIcon from './ButtonIcon';

const Button = ({title, onPress, name, type}) => {
  if (type == 'icon') {
    return <ButtonIcon name={name} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  wrapper: {
    component: {
      width: 255,
      height: 40,
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
      paddingHorizontal: 97,
      alignItems: 'center',
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: colors.text.white,
    },
  },
};
