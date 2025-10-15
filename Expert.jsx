import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function Expert({ navigation }) {
  return (
    <SafeAreaView style={styles.wrap}>
      {/* Header đơn giản với nút Back */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.backText}>← Menu</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chuyên gia</Text>
        <View style={{ width: 72 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.title}>Gói Chuyên gia (Doanh nghiệp)</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1600&auto=format&fit=crop',
          }}
          style={styles.hero}
          resizeMode="cover"
        />

        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.row}>
            <View style={styles.kpi}>
              <Text style={styles.kpiTitle}>Nở rộ</Text>
              <Text style={styles.kpiVal}>128</Text>
            </View>
            <View style={styles.kpi}>
              <Text style={styles.kpiTitle}>Sắp nở</Text>
              <Text style={styles.kpiVal}>53</Text>
            </View>
          </View>

          <View style={styles.chart}>
            <Text style={styles.chartText}>
              [Biểu đồ so sánh theo khu vực / lịch sử]
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Xuất dữ liệu</Text>
            <Text style={styles.cardDesc}>
              Tải CSV/JSON để phân tích sâu hơn.
            </Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xuất CSV</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xuất JSON</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Quyền truy cập API</Text>
            <Text style={styles.cardDesc}>
              Tích hợp dữ liệu BloomIntel vào hệ thống của bạn.
            </Text>
            <TouchableOpacity
              style={[styles.btn, { alignSelf: 'flex-start', marginTop: 8 }]}
            >
              <Text style={styles.btnText}>Quản lý API Keys</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mô hình hoá kịch bản</Text>
            <Text style={styles.cardDesc}>
              VD: Nhiệt độ tăng 2°C ảnh hưởng ngày thu hoạch tam giác mạch?
            </Text>
            <TouchableOpacity
              style={[styles.btn, { alignSelf: 'flex-start', marginTop: 8 }]}
            >
              <Text style={styles.btnText}>Mô phỏng ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0E2036',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  hero: {
    width: '100%',
    height: 140,
    borderRadius: 14,
    marginBottom: 12,
    alignSelf: 'center',
  },

  row: { flexDirection: 'row', gap: 10 },
  kpi: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E7EEF6',
  },
  kpiTitle: { color: '#4F5F74', fontWeight: '700' },
  kpiVal: { color: '#0E2036', fontWeight: '800', fontSize: 18, marginTop: 4 },
  chart: {
    height: 160,
    backgroundColor: '#E6F2FF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CFE2FF',
    marginTop: 10,
  },
  chartText: { color: '#2E4A6B' },
  card: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E7EEF6',
  },
  cardTitle: { fontWeight: '800', color: '#0E2036', marginBottom: 4 },
  cardDesc: { color: '#4F5F74' },
  btn: {
    height: 44,
    backgroundColor: '#0DB36B',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  btnText: { color: '#fff', fontWeight: '700' },
});
