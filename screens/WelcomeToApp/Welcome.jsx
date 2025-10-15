import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', paddingHorizontal: 24 }}>
        <Image
          source={require('../../assets/icon.png')}
          style={{ width: 240, height: 240, marginTop: 24 }}
          resizeMode="contain"
        />

        <Text style={styles.title}>Chào mừng đến với App :D</Text>
        <Text style={styles.subtitle}>
          Hãy đăng nhập hoặc tạo tài khoản để tiếp tục
        </Text>

        <TouchableOpacity
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.btnPrimaryText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnGhost]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnGhostText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF6FF', justifyContent: 'center' },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    color: '#0E2036',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 8,
    color: '#0E2036',
  },
  btn: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: '100%',
    marginTop: 16,
  },
  btnPrimary: { backgroundColor: '#1374F6' },
  btnPrimaryText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  btnGhost: { backgroundColor: '#ffffff' },
  btnGhostText: {
    color: '#1374F6',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});
