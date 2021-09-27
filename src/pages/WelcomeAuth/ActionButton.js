import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils/colors';

const ActionButton = ({title, button, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.title}>{title}</Text>
      <Button title={button} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      marginBottom: 50,
      maxWidth: 255,
    },
  },
  text: {
    title: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 11,
    },
  },
};

export default ActionButton;
