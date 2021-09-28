import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Back, IconRegister} from '../../assets';
import {Button, Input} from '../../components';
import {colors} from '../../utils/colors';

const Register = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.iconBack}>
        <Back />
      </TouchableOpacity>
      <View>
        <Text style={styles.text.register}>Register Page</Text>
        <View style={styles.illustration}>
          <IconRegister />
        </View>
        <Text style={styles.text.desc}>
          Silahkan mengisi form untuk proses akun login Anda
        </Text>
      </View>
      <View style={styles.form.formInput}>
        <View style={styles.form.input}>
          <Input placeholder="Nama Lengkap" />
        </View>
        <View style={styles.form.input}>
          <Input placeholder="Email" />
        </View>
        <View style={styles.form.input}>
          <Input placeholder="Password" />
        </View>
      </View>
      <View style={styles.form.submit}>
        <Button title="Register" />
      </View>
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
