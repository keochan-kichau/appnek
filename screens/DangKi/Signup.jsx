import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'current_user';

export default function Signup({ navigation }) {
  const [f, setF] = useState({
    email: '',
    username: '',
    pass: '',
    confirm: '',
  });

  const onSignup = async () => {
    const { email, username, pass, confirm } = f;
    if (!email || !username || !pass || !confirm)
      return alert('Thiếu thông tin');
    if (pass !== confirm) return alert('Mật khẩu xác nhận không khớp');

    const s = await AsyncStorage.getItem(USERS_KEY);
    const users = s ? JSON.parse(s) : [];
    if (users.some(u => u.email === email || u.username === username)) {
      alert('Email/Username đã tồn tại');
      return;
    }
    users.push({ email, username, password: pass });
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    await AsyncStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify({ username, email }),
    );
    navigation.reset({ index: 0, routes: [{ name: 'Menu' }] });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us and get started</Text>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputControl}
            placeholder="john@example.com"
            placeholderTextColor="#6b7280"
            autoCapitalize="none"
            value={f.email}
            onChangeText={v => setF({ ...f, email: v })}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.inputControl}
            placeholder="yourname"
            placeholderTextColor="#6b7280"
            autoCapitalize="none"
            value={f.username}
            onChangeText={v => setF({ ...f, username: v })}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputControl}
            placeholder="********"
            placeholderTextColor="#6b7280"
            secureTextEntry
            value={f.pass}
            onChangeText={v => setF({ ...f, pass: v })}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.inputControl}
            placeholder="********"
            placeholderTextColor="#6b7280"
            secureTextEntry
            value={f.confirm}
            onChangeText={v => setF({ ...f, confirm: v })}
          />
        </View>

        <TouchableOpacity onPress={onSignup} style={styles.btn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{ marginTop: 14, alignSelf: 'center' }}
        >
          <Text style={styles.linkText}>Đã có tài khoản? Login</Text>
        </TouchableOpacity>
      </ScrollView>
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
  title: {
    fontSize: 35,
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
    backgroundColor: '#07ddecff',
    borderColor: '#07ddecff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
