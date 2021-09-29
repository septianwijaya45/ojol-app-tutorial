import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Back} from '../../../../assets';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity style={styles.iconBack} {...rest}>
      {rest.name === 'back' && <Back />}
    </TouchableOpacity>
  );
};

const styles = {
  iconBack: {
    width: 25,
    height: 25,
    marginBottom: 23,
  },
};

export default ButtonIcon;
