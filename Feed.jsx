import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// (nếu bạn đã cài Feather icon thì mở 2 dòng dưới; nếu chưa thì để Text "Log out" là đủ)
// import Icon from 'react-native-vector-icons/Feather';

const CURRENT_USER_KEY = 'current_user';

const DATA = [
  {
    id: '1',
    title: 'Seafood Pasta',
    image:
      'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    price: 8.9,
  },
  {
    id: '2',
    title: 'Beef Burger',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    price: 6.5,
  },
  {
    id: '3',
    title: 'Sushi Set',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    price: 12.0,
  },
  {
    id: '4',
    title: 'Chicken Bowl',
    image:
      'https://images.unsplash.com/photo-1604908176997-43100294b3bb?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5,
    price: 7.2,
  },
];

export default function Feed({ navigation }) {
  const onLogout = async () => {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { dish: item })}
      activeOpacity={0.85}
    >
      <Image source={{ uri: item.image }} style={styles.cardImg} />
      <View style={styles.cardRow}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.rating}>
          {/* <Icon name="star" size={14} color="#FFA41B" /> */}
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>
      </View>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = useMemo(() => item => item.id, []);

  return (
    <SafeAreaView style={styles.wrap}>
      {/* Header với nút Log out */}
      <View style={styles.header}>
        <Text style={styles.hi}>Let’s Eat</Text>

        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
          {/* Nếu dùng icon:
            <Icon name="log-out" size={16} color="#fff" />
          */}
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh search */}
      <View style={styles.search}>
        {/* <Icon name="search" size={18} color="#74859E" /> */}
        <Text style={{ color: '#74859E', marginRight: 6 }}>🔎</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search dish…"
          placeholderTextColor="#9AA7B7"
        />
        {/* <Icon name="sliders" size={18} color="#74859E" /> */}
        <Text style={{ color: '#74859E', marginLeft: 6 }}>⚙️</Text>
      </View>

      {/* Grid món ăn */}
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 120 }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#F3F7FB' },

  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: { fontSize: 24, fontWeight: '800', color: '#0E2036' },

  logoutBtn: {
    backgroundColor: '#0DB36B',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  logoutText: { color: '#fff', fontWeight: '700' },

  search: {
    marginHorizontal: 16,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 44,
    borderWidth: 1,
    borderColor: '#E5EDF5',
  },
  searchInput: { flex: 1, color: '#0E2036' },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E7EEF6',
  },
  cardImg: { width: '100%', height: 110 },
  cardRow: {
    paddingHorizontal: 10,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0E2036',
    flex: 1,
    paddingRight: 6,
  },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratingText: { fontSize: 12, color: '#0E2036', opacity: 0.8 },
  price: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 2,
    fontSize: 13,
    fontWeight: '600',
    color: '#1374F6',
  },
});
