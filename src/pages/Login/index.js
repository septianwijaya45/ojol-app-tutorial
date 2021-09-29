import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {IconLogin} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils/colors';

const Login = () => {
  const navigation = useNavigation();
  const LoginReducer = useSelector(state => state.LoginReducer.form);
  const dispatch = useDispatch();

  // Simpan Data
  const sendData = () => {
    console.log('Data Tersimpan!', LoginReducer);
  };

  // check jika data di input value berubah
  const onInputChange = (inputType, value) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView showVerticalIndicator={false}>
        <Button
          name="back"
          type="icon"
          onPress={() => navigation.navigate('WelcomeAuth')}
        />
        <View>
          <Text style={styles.text.register}>Login Page</Text>
          <View style={styles.illustration}>
            <IconLogin />
          </View>
          <Text style={styles.text.desc}>
            Silahkan mengisi form untuk Masuk Ke Aplikasi
          </Text>
        </View>
        <View style={styles.form.formInput}>
          <View style={styles.form.input}>
            <Input
              placeholder="Email"
              value={LoginReducer.email}
              onChangeText={value => onInputChange('email', value)}
            />
          </View>
          <View style={styles.form.input}>
            <Input
              placeholder="Password"
              value={LoginReducer.password}
              onChangeText={value => onInputChange('password', value)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.form.submit}>
          <Button title="Login" onPress={sendData} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    padding: 19,
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

export default Login;
