import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CURRENT_USER_KEY = 'current_user';

export default function Menu({ navigation }) {
  const onLogout = async () => {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.title}>BloomIntel</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={styles.hdrBtn}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.hdrBtnText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hdrBtn} onPress={onLogout}>
            <Text style={styles.hdrBtnText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.subtitle}>Chọn gói dịch vụ</Text>

      <View style={styles.grid}>
        {/* GÓI DU KHÁCH (CÁ NHÂN) */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Visitor')}
        >
          <Text style={styles.cardTitle}>Du khách (Cá nhân)</Text>
          <Text style={styles.cardDesc}>
            Bản đồ tương tác trạng thái nở hoa theo thời gian thực, tìm kiếm
            thông minh, thông báo cá nhân hóa.
          </Text>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Bản đồ • Tìm kiếm • Thông báo</Text>
          </View>
        </TouchableOpacity>

        {/* GÓI CHUYÊN GIA (DOANH NGHIỆP) */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Expert')}
        >
          <Text style={styles.cardTitle}>Chuyên gia (Doanh nghiệp)</Text>
          <Text style={styles.cardDesc}>
            Dashboard phân tích theo khu vực, xuất CSV/JSON, quyền truy cập API,
            mô hình hoá kịch bản (nhiệt độ ↑2°C…).
          </Text>
          <View style={[styles.pill, { backgroundColor: '#0DB36B15' }]}>
            <Text style={[styles.pillText, { color: '#0DB36B' }]}>
              Phân tích • Export • API
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#F3F7FB' },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: '800', color: '#0E2036' },
  hdrBtn: {
    backgroundColor: '#0DB36B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  hdrBtnText: { color: '#fff', fontWeight: '700' },
  subtitle: { paddingHorizontal: 16, color: '#5A6B82', marginBottom: 10 },
  grid: { padding: 16, gap: 14 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E7EEF6',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0E2036',
    marginBottom: 6,
  },
  cardDesc: { color: '#4F5F74' },
  pill: {
    alignSelf: 'flex-start',
    marginTop: 12,
    backgroundColor: '#1374F615',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  pillText: { fontWeight: '700', color: '#1374F6', fontSize: 12 },
});
