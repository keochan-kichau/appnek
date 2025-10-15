import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'current_user';

export default function Profile({ navigation }) {
  const [user, setUser] = useState({ username: '', email: '' });

  useEffect(() => {
    (async () => {
      const s = await AsyncStorage.getItem(CURRENT_USER_KEY);
      const u = s ? JSON.parse(s) : null;
      if (u) setUser({ username: u.username || '', email: u.email || '' });
    })();
  }, []);

  const onSave = async () => {
    try {
      const s = await AsyncStorage.getItem(USERS_KEY);
      const users = s ? JSON.parse(s) : [];
      const idx = users.findIndex(x => x.email === user.email);
      if (idx >= 0) users[idx].username = user.username;
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      Alert.alert('Đã lưu', 'Cập nhật profile thành công');
      // quay lại Menu
      navigation.reset({ index: 0, routes: [{ name: 'Menu' }] });
      // hoặc navigation.navigate('Menu'); (tuỳ bạn thích reset hay chỉ navigate)
    } catch (e) {
      Alert.alert('Lỗi', 'Không lưu được');
    }
  };

  return (
    <SafeAreaView style={styles.wrap}>
      {/* Header có back về Menu */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.backText}>← Menu</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hồ sơ</Text>
        <View style={{ width: 72 }} />
      </View>

      <View style={{ padding: 16 }}>
        <Text style={styles.label}>Tên hiển thị</Text>
        <TextInput
          style={styles.input}
          value={user.username}
          onChangeText={v => setUser(u => ({ ...u, username: v }))}
          placeholder="Tên"
        />

        <Text style={styles.label}>Email (không đổi)</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F2F4F7' }]}
          value={user.email}
          editable={false}
        />

        <TouchableOpacity style={styles.btn} onPress={onSave}>
          <Text style={styles.btnText}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#F8FBFD' },
  header: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
  },
  backBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#E8F4EE',
  },
  backText: { color: '#0DB36B', fontWeight: '700' },
  headerTitle: { fontWeight: '800', color: '#0E2036' },

  label: {
    marginTop: 12,
    marginBottom: 6,
    color: '#4F5F74',
    fontWeight: '700',
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E4EF',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  btn: {
    height: 48,
    backgroundColor: '#1374F6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  btnText: { color: '#fff', fontWeight: '700' },
});
