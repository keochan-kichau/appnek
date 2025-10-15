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

export default function Forgot({ navigation }) {
  const [f, setF] = useState({ email: '', pass: '', confirm: '' });

  const onSubmit = async () => {
    const { email, pass, confirm } = f;
    if (!email || !pass || !confirm) return alert('Thiếu thông tin');
    if (pass !== confirm) return alert('Mật khẩu xác nhận không khớp');

    const s = await AsyncStorage.getItem(USERS_KEY);
    const users = s ? JSON.parse(s) : [];
    const i = users.findIndex(u => u.email === email);
    if (i === -1) {
      alert('Email chưa đăng kí');
      return;
    }

    users[i].password = pass;
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    alert('Đổi mật khẩu ok, hãy đăng nhập');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Cập nhật mật khẩu mới cho tài khoản</Text>

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
          <Text style={styles.inputLabel}>New Password</Text>
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

        <TouchableOpacity onPress={onSubmit} style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{ marginTop: 14, alignSelf: 'center' }}
        >
          <Text style={styles.linkText}>Back to Login</Text>
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
