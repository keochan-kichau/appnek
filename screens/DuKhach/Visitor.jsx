import React, { useRef, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const visitor = [
  {
    id: '1',
    title: 'Sắp nở',
    src: require('../../assets/visitor/sakura1.png'),
  },
  {
    id: '2',
    title: 'Nở búp',
    src: require('../../assets/visitor/sakura2.png'),
  },
  {
    id: '3',
    title: 'Nở rộ',
    src: require('../../assets/visitor/sakura3.png'),
  },
  {
    id: '4',
    title: 'Sắp tàn',
    src: require('../../assets/visitor/sakura4.png'),
  },
];

export default function Visitor({ navigation }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const { width } = useWindowDimensions();
  const listRef = useRef(null);

  // theo dõi item đang hiển thị để update dot
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems?.length > 0) {
      setActive(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  const goPrev = useCallback(() => {
    if (active > 0 && listRef.current) {
      listRef.current.scrollToIndex({ index: active - 1, animated: true });
    }
  }, [active]);

  const goNext = useCallback(() => {
    if (active < visitor.length - 1 && listRef.current) {
      listRef.current.scrollToIndex({ index: active + 1, animated: true });
    }
  }, [active]);

  const renderItem = ({ item }) => (
    <View style={{ width, paddingHorizontal: 16 }}>
      <View style={styles.slideBox}>
        <Image source={item.src} style={styles.slideImage} resizeMode="cover" />
        <View style={styles.slideFooter}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <View style={styles.navRow}>
            <TouchableOpacity
              onPress={goPrev}
              style={[styles.navBtn, active === 0 && styles.navBtnDisabled]}
            >
              <Text style={styles.navBtnText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goNext}
              style={[
                styles.navBtn,
                active === visitor.length - 1 && styles.navBtnDisabled,
              ]}
            >
              <Text style={styles.navBtnText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

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
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.title}>Gói Du khách (Cá nhân)</Text>

        {/* CAROUSEL ẢNH – thay cho phần bản đồ */}
        <FlatList
          ref={listRef}
          data={visitor}
          keyExtractor={it => it.id}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}
        />

        {/* Dots indicator */}
        <View style={styles.dotsRow}>
          {visitor.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === active && styles.dotActive]}
            />
          ))}
        </View>

        {/* Tìm kiếm thông minh */}
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

        {/* Thông báo cá nhân hoá */}
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

const GREEN = '#0DB36B';

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
  backText: { color: GREEN, fontWeight: '700' },
  headerTitle: { fontWeight: '800', color: '#0E2036' },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0E2036',
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  /* Carousel */
  slideBox: {
    height: 220,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CFE2FF',
    backgroundColor: '#E6F2FF',
  },
  slideImage: { width: '100%', height: '100%' },
  slideFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slideTitle: { color: '#fff', fontWeight: '800' },
  navRow: { flexDirection: 'row', gap: 8 },
  navBtn: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  navBtnDisabled: { opacity: 0.4 },
  navBtnText: { color: '#0E2036', fontWeight: '800' },

  dotsRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#D0D8E4' },
  dotActive: { backgroundColor: GREEN },

  /* Search & cards */
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
