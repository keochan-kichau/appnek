import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function Visitor({ navigation }) {
  const [query, setQuery] = useState('');

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
        <Text style={styles.headerTitle}>Du khách</Text>
        <View style={{ width: 72 }} />
        {/* chặn cân đối */}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.title}>Gói Du khách (Cá nhân)</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1520975922422-1f6c2f1f94bb?q=80&w=1600&auto=format&fit=crop',
          }}
          style={styles.hero}
          resizeMode="cover"
        />

        <View style={styles.mapBox}>
          <Text style={styles.mapText}>
            [Bản đồ: Sắp nở • Nở búp • Nở rộ • Sắp tàn]
          </Text>
        </View>

        <Text style={styles.label}>Tìm kiếm thông minh</Text>
        <TextInput
          style={styles.input}
          placeholder='VD: "hoa mận nở gần tôi trong 14 ngày tới"'
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Tìm</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Thông báo cá nhân hoá</Text>
          <Text style={styles.cardDesc}>
            Thêm loài/địa điểm yêu thích để nhận thông báo khi sắp nở rộ.
          </Text>
          <TouchableOpacity
            style={[styles.btn, { alignSelf: 'flex-start', marginTop: 8 }]}
          >
            <Text style={styles.btnText}>Quản lý yêu thích</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 16,
  },
  mapBox: {
    marginHorizontal: 16,
    height: 220,
    borderRadius: 14,
    backgroundColor: '#E6F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CFE2FF',
  },
  mapText: { color: '#2E4A6B' },
  label: {
    marginTop: 16,
    marginBottom: 6,
    color: '#4F5F74',
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  input: {
    marginHorizontal: 16,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E4EF',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  btn: {
    marginHorizontal: 16,
    height: 48,
    backgroundColor: '#1374F6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  btnText: { color: '#fff', fontWeight: '700' },
  card: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E7EEF6',
  },
  cardTitle: { fontWeight: '800', color: '#0E2036', marginBottom: 4 },
  cardDesc: { color: '#4F5F74' },
});
