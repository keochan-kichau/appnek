import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const COLORS = {
  border: '#E5E7EB',
  text: '#111827',
  sub: '#6B7280',
  accent: '#2563EB',
  white: '#fff',
  bg: '#E0F2FE',
};

export const ScreenBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.bg,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    }}
  >
    <View style={styles.phone}>
      <View style={styles.inner}>{children}</View>
    </View>
  </View>
);

export const TopTabs: React.FC<{
  active: 'login' | 'signup';
  onLogin: () => void;
  onSignup: () => void;
}> = ({ active, onLogin, onSignup }) => (
  <View style={styles.tabs}>
    <TouchableOpacity onPress={onLogin}>
      <Text
        style={[
          styles.tabText,
          active === 'login' ? styles.activeText : undefined,
        ]}
      >
        Login
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onSignup}>
      <Text
        style={[
          styles.tabText,
          active === 'signup' ? styles.activeText : undefined,
        ]}
      >
        Sign Up
      </Text>
    </TouchableOpacity>
  </View>
);

export const AvatarCircle: React.FC<{ icon?: string }> = ({ icon = '👤' }) => (
  <View style={styles.avatar}>
    <Text style={{ fontSize: 28 }}>{icon}</Text>
  </View>
);

export const UnderlineInput: React.FC<{
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
}> = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={{ marginBottom: 12 }}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.sub}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    <View style={styles.line} />
  </View>
);

export const PillButton: React.FC<{ title: string; onPress: () => void }> = ({
  title,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.pill}>
    <Text style={{ color: COLORS.accent, fontWeight: '800' }}>✓ {title}</Text>
  </TouchableOpacity>
);

export const SocialRow = () => (
  <View style={styles.socialRow}>
    <TouchableOpacity style={[styles.social, { backgroundColor: '#DC4A38' }]}>
      <Text style={styles.socText}>G</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.social, { backgroundColor: '#0F172A' }]}>
      <Text style={styles.socText}>GH</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.social, { backgroundColor: '#2563EB' }]}>
      <Text style={styles.socText}>f</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  phone: {
    width: 340,
    borderRadius: 32,
    backgroundColor: COLORS.white,
    paddingVertical: 28,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 6,
  },
  inner: { paddingHorizontal: 24 },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tabText: { fontSize: 24, fontWeight: '700', color: COLORS.sub },
  activeText: { color: COLORS.text },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F3F4F6',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  input: { fontSize: 16, color: COLORS.text, paddingVertical: 8 },
  line: { height: 1, backgroundColor: COLORS.border },
  pill: {
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: COLORS.accent,
    width: 220,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.accent,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 22,
    paddingHorizontal: 32,
  },
  social: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socText: { color: '#fff', fontWeight: '700' },
});
