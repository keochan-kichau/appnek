import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// filepath: d:\kichau2\Login2\react-native.config.js
const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'current_user';

async function findUser(emailOrUser, pass) {
  const s = await AsyncStorage.getItem(USERS_KEY);
  const users = s ? JSON.parse(s) : [];
  return users.find(
    u =>
      (u.email === emailOrUser || u.username === emailOrUser) &&
      u.password === pass,
  );
}

export default function Login({ navigation }) {
  const [form, setForm] = useState({ email: '', password: '' });

  // screens/Login.jsx
  const onLogin = async () => {
    if (!form.email || !form.password) return;
    const u = await findUser(form.email, form.password);
    if (!u) {
      alert('Sai thông tin');
      return;
    }
    await AsyncStorage.setItem(
      'current_user',
      JSON.stringify({ username: u.username, email: u.email }),
    );
    // Sau đăng nhập -> Feed
    navigation.reset({ index: 0, routes: [{ name: 'Menu' }] });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt="Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../../assets/icon.png')}
          />
          <Text>
            <Text style={styles.title}>Welcome </Text>
            <Text style={styles.Conca}>Back 👋</Text>
          </Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email or username</Text>
            <TextInput
              style={styles.inputControl}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              autoCapitalize="none"
              onChangeText={email => setForm({ ...form, email })}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.inputControl}
              placeholder="********"
              placeholderTextColor="#6b7280"
              secureTextEntry
              onChangeText={password => setForm({ ...form, password })}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={onLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.formLink}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.formFooter}>
          Don't have an account?{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 24,
  },
  Conca: {
    fontSize: 31,
    fontWeight: '700',
    color: '#009dffff',
    fontFamily: 'Arial',
    marginBottom: 6,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#07ec3cff',
    borderColor: '#07ec3cff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
