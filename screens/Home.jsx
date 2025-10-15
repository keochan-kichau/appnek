import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
const temperatures = [
  'Well Done',
  'Medium Well',
  'Medium',
  'Medium Rare',
  'Rare',
];
const sides = [
  { label: 'Fries', price: null },
  { label: 'Onion Rings', price: 1.95 },
  { label: 'Cole Slaw', price: null },
  { label: 'Sweet Potato Fries', price: 2.95 },
  { label: 'Side Salad', price: null },
];

export default function Example() {
  const [form, setForm] = useState({
    side: '',
    temperature: '',
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#F4EFF3' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={styles.headerAction}
        >
          <FeatherIcon color="#1d1d1d" name="arrow-left" size={24} />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          alt=""
          source={{
            uri: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.hero}
        />

        <View style={styles.section}>
          <Text style={styles.title}>Old Fashion Burger</Text>

          <Text style={styles.subtitle}>
            Comes with BBQ sause, pickles, tomatoes, and onions. Served medium
            rare.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Side</Text>

              <Text style={styles.sectionSubtitle}>Select one option</Text>
            </View>

            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>Required</Text>
            </View>
          </View>

          <View style={styles.sectionOptions}>
            {sides.map(({ label, price }, index) => {
              const isActive = form.side === label;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setForm({ ...form, side: label });
                  }}
                >
                  <View
                    style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}
                  >
                    <View
                      style={[
                        styles.radioInput,
                        isActive && styles.radioInputActive,
                      ]}
                    />

                    <Text style={styles.radioLabel}>{label}</Text>

                    {price && (
                      <Text style={styles.radioPrice}>
                        +$
                        {price}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Meat Temperature</Text>

              <Text style={styles.sectionSubtitle}>Select one option</Text>
            </View>

            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>Required</Text>
            </View>
          </View>

          <View style={styles.sectionOptions}>
            {temperatures.map((label, index) => {
              const isActive = form.temperature === label;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setForm({ ...form, temperature: label });
                  }}
                >
                  <View
                    style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}
                  >
                    <View
                      style={[
                        styles.radioInput,
                        isActive && styles.radioInputActive,
                      ]}
                    />

                    <Text style={styles.radioLabel}>{label}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={{ flex: 1, paddingHorizontal: 24 }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add to order ($15.95)</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
  },
  hero: {
    width: '100%',
    height: 220,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#494949',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: '#fff',
    marginHorizontal: 12,
  },
  /** Section */
  section: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#6d6d6d',
  },
  sectionBadge: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  sectionOptions: {
    paddingTop: 8,
  },
  /** Radio */
  radio: {
    position: 'relative',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
  radioInput: {
    width: 18,
    height: 18,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#1d1d1d',
    marginRight: 12,
  },
  radioInputActive: {
    borderWidth: 5,
    borderColor: '#1d1d1d',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2d2d3a',
  },
  radioPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6d6d6d',
    marginLeft: 'auto',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#F82E08',
    borderColor: '#F82E08',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.45,
  },
});
