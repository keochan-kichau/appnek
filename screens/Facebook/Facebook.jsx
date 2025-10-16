// screens/Facebook/Facebook.jsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

const BLUE = '#1877F2';
const BG = '#F0F2F5';
const CARD = '#FFFFFF';
const LINE = '#E4E6EB';

/** ====== demo data ====== */
const STORIES = [
  { id: 's1', name: 'Tạo tin', badge: '＋', color: '#E3F2FF' },
  { id: 's2', name: 'Kyul', color: '#FFE6F0' },
  { id: 's3', name: 'Sunghoon', color: '#E6FFF0' },
  { id: 's4', name: 'Heji', color: '#FFF6E2' },
  { id: 's5', name: 'Miyeon', color: '#EAE6FF' },
];

const POSTS = [
  {
    id: 'p1',
    name: 'Kyul',
    time: '16 phút',
    text: 'Đẹp nha',
    image: require('../../assets/sakurane.jpg'),
    color: '#D9EDFF',
  },
  {
    id: 'p2',
    name: 'Sunghoon',
    time: '1 giờ',
    text: 'AI và dữ liệu 🍃',
    image: require('../../assets/ai.jpg'),
    color: '#FFE7D6',
  },
  {
    id: 'p3',
    name: 'Heji',
    time: 'Hôm qua',
    text: 'Ruộng lúa 😋',
    image: require('../../assets/lua.jpg'),
    color: '#E7F8EA',
  },
];

/** ====== components ====== */
const Story = ({ item }) => (
  <View style={[styles.story, { backgroundColor: CARD }]}>
    <View style={[styles.storyThumb, { backgroundColor: item.color }]} />
    <Text numberOfLines={1} style={styles.storyName}>
      {item.name}
    </Text>
    {item.badge ? (
      <View style={styles.storyBadge}>
        <Text style={{ color: '#fff', fontWeight: '800' }}>{item.badge}</Text>
      </View>
    ) : null}
  </View>
);

const Post = ({ item }) => (
  <View style={styles.post}>
    {/* header */}
    <View style={styles.postHeader}>
      <View style={styles.avatar}>
        <Text style={{ fontSize: 18 }}>🧑‍🦰</Text>
      </View>
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time} · 🌐</Text>
      </View>
      <Text style={{ fontSize: 18, color: '#606770' }}>⋯</Text>
    </View>

    {/* text */}
    {!!item.text && <Text style={styles.content}>{item.text}</Text>}

    {/* image placeholder */}
    {item.image ? (
      <Image source={item.image} style={styles.postImage} resizeMode="cover" />
    ) : (
      <View style={[styles.fakeImage, { backgroundColor: item.color }]} />
    )}

    {/* actions */}
    <View style={styles.actionsRow}>
      <TouchableOpacity style={styles.actionBtn}>
        <Text>👍 Thích</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <Text>💬 Bình luận</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <Text>↗️ Chia sẻ</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Facebook({ navigation }) {
  return (
    <SafeAreaView style={styles.wrap}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconBtn}
        >
          <Text style={styles.iconTxt}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.headerRight}>
          <View style={styles.circleBtn}>
            <Text style={styles.circleTxt}>＋</Text>
          </View>
          <View style={styles.circleBtn}>
            <Text style={styles.circleTxt}>🔍</Text>
          </View>
          <View style={styles.circleBtn}>
            <Text style={styles.circleTxt}>💬</Text>
          </View>
        </View>
      </View>

      {/* Top tabs (home, reels, groups, marketplace, profile) */}
      <View style={styles.topTabs}>
        {['🏠', '🎬', '👥', '🛍️', '🙂'].map((i, idx) => (
          <View key={idx} style={styles.tabItem}>
            <Text style={{ fontSize: 18 }}>{i}</Text>
          </View>
        ))}
      </View>

      {/* Stories */}
      <View style={styles.storiesBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        >
          {STORIES.map(s => (
            <Story key={s.id} item={s} />
          ))}
        </ScrollView>
      </View>

      {/* Feed */}
      <FlatList
        data={POSTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom tabs */}
      <View style={styles.bottomTabs}>
        {['🏠', '🔍', '＋', '🔔', '☰'].map((t, idx) => (
          <TouchableOpacity key={idx} style={styles.bottomItem}>
            <Text
              style={{
                fontSize: idx === 2 ? 22 : 18,
                color: idx === 2 ? '#fff' : '#1d1f23',
              }}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

/** ====== styles ====== */
const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: BG },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LINE,
  },
  iconBtn: { padding: 6, width: 40, alignItems: 'center' },
  iconTxt: { fontSize: 18, color: '#1d1f23' },
  logo: { color: BLUE, fontSize: 28, fontWeight: '900', letterSpacing: 0.2 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E7F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTxt: { color: BLUE, fontWeight: '800' },

  topTabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LINE,
  },
  tabItem: { flex: 1, alignItems: 'center', paddingVertical: 10 },

  storiesBar: { backgroundColor: '#fff', paddingVertical: 10, marginBottom: 6 },
  story: {
    width: 100,
    height: 160,
    borderRadius: 12,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: LINE,
  },
  storyThumb: { flex: 1 },
  storyName: { padding: 6, fontWeight: '700', color: '#1d1f23' },
  storyBadge: {
    position: 'absolute',
    bottom: 34,
    left: 6,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },

  post: {
    backgroundColor: CARD,
    marginVertical: 6,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: LINE,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8EEF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontWeight: '800', color: '#1d1f23' },
  time: { color: '#7C8CA0', fontSize: 12 },
  content: { marginTop: 8, paddingHorizontal: 12, color: '#1d1f23' },
  fakeImage: { height: 240, marginTop: 10, backgroundColor: '#eee' },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: LINE,
    backgroundColor: '#fff',
  },
  actionBtn: { flex: 1, alignItems: 'center' },

  bottomTabs: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 52,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: LINE,
  },
  bottomItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
