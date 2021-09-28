import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Back, IconRegister} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils/colors';

const Register = navigation => {
  const RegisterReducer = useSelector(state => state.RegisterReducer.form);
  const dispatch = useDispatch();

  // Simpan Data
  const sendData = () => {
    console.log('Data Tersimpan!', RegisterReducer);
  };

  // check jika data di input value berubah
  const onInputChange = (inputType, value) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView showVerticalIndicator={false}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.navigate('WelcomeAuth')}>
          <Back />
        </TouchableOpacity>
        <View>
          <Text style={styles.text.register}>Register Page</Text>
          <View style={styles.illustration}>
            <IconRegister />
          </View>
          <Text style={styles.text.desc}>
            Silahkan mengisi form untuk proses akun login Anda{' '}
            {RegisterReducer.title}
          </Text>
        </View>
        <View style={styles.form.formInput}>
          <View style={styles.form.input}>
            <Input
              placeholder="Nama Lengkap"
              value={RegisterReducer.fullName}
              onChangeText={value => onInputChange('fullName', value)}
            />
          </View>
          <View style={styles.form.input}>
            <Input
              placeholder="Email"
              value={RegisterReducer.email}
              onChangeText={value => onInputChange('email', value)}
            />
          </View>
          <View style={styles.form.input}>
            <Input
              placeholder="Password"
              value={RegisterReducer.password}
              onChangeText={value => onInputChange('password', value)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.form.submit}>
          <Button title="Register" onPress={sendData} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    padding: 19,
  },
  iconBack: {
    width: 25,
    height: 25,
    marginBottom: 23,
  },
  illustration: {
    width: 157,
    height: 98,
    marginBottom: 14,
  },
  text: {
    register: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 14,
    },
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      marginBottom: 36,
    },
  },
  form: {
    formInput: {
      marginVertical: 36,
    },
    input: {
      marginBottom: 33,
    },
    submit: {
      alignItems: 'center',
    },
  },
};

export default Register;
