import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CURRENT_USER_KEY = 'current_user';

const Card = ({ label, bg, icon, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.85}
    onPress={onPress}
    style={[styles.card, { backgroundColor: bg }]}
  >
    <Text style={styles.cardIcon}>{icon}</Text>
    <Text style={styles.cardText}>{label}</Text>
  </TouchableOpacity>
);

export default function Menu({ navigation }) {
  const onLogout = async () => {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <SafeAreaView style={styles.wrap}>
      {/* header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Ứng dụng của bạn</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.profileBtn}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 22 }}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* cards */}
      <Card
        label="Gói Du khách (Cá nhân)"
        icon="🧳"
        bg="#DDF7FB"
        onPress={() => navigation.navigate('Visitor')}
      />
      <Card
        label="Gói Chuyên gia (Doanh nghiệp)"
        icon="💼"
        bg="#CFF3F0"
        onPress={() => navigation.navigate('Expert')}
      />
      <Card
        label="Xem tin tức của chúng tôi"
        icon="🌐"
        bg="#FFF0C9"
        onPress={() => navigation.navigate('Facebook')}
      />

      {/* logout */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onLogout}
        style={[styles.card, styles.logoutCard]}
      >
        <Text style={styles.cardIcon}>🏠</Text>
        <Text style={[styles.cardText, { color: '#0E2036' }]}>Đăng xuất</Text>
      </TouchableOpacity>

      {/* version */}
      <Text style={styles.version}>Phiên bản 1.0.0</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#F8FBFD', paddingHorizontal: 20 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  title: { fontSize: 28, fontWeight: '800', color: '#0E2036' },
  profileBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  cardIcon: { fontSize: 32, width: 40, textAlign: 'center', color: '#0E2036' },
  cardText: {
    marginLeft: 12,
    fontSize: 22,
    fontWeight: '700',
    color: '#0E2036',
  },

  logoutCard: { backgroundColor: '#FFFFFF', marginTop: 6 },
  version: {
    textAlign: 'center',
    color: '#98A6B5',
    marginTop: 12,
    marginBottom: 10,
  },
});
