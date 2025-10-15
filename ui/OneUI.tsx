// ui/OneUI.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const PRIMARY = '#2563EB'; // One UI blue
const PRIMARY_2 = '#0EA5E9'; // cyan
const SURFACE = '#FFFFFF';
const LABEL = '#0F172A';
const SUBTLE = '#64748B';
const LINE = '#E5E7EB';

export const OneUIScreen: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <View style={{ flex: 1, backgroundColor: SURFACE }}>
    {/* Header gradient kiểu One UI */}
    <LinearGradient
      colors={[PRIMARY, PRIMARY_2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <Text style={styles.h1}>{title}</Text>
      {subtitle ? <Text style={styles.h2}>{subtitle}</Text> : null}
    </LinearGradient>

    {/* Nội dung trắng, bo góc lớn */}
    <View style={styles.sheet}>{children}</View>
  </View>
);

export const OneUIField: React.FC<{
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
}> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
}) => (
  <View style={{ marginBottom: 14 }}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={SUBTLE}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
      style={styles.input}
    />
  </View>
);

export const OneUIButton: React.FC<{
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}> = ({ title, onPress, variant = 'primary', style, textStyle }) => {
  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={[styles.btnOutline, style]}
      >
        <Text style={[styles.btnOutlineText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.btn, style]}
    >
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const OneUILinkText: React.FC<{
  children: React.ReactNode;
  onPress: () => void;
  style?: TextStyle;
}> = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.link, style]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    height: 180,
    paddingHorizontal: 20,
    paddingTop: 36,
    justifyContent: 'flex-end',
  },
  h1: { color: SURFACE, fontSize: 28, fontWeight: '800' },
  h2: { color: SURFACE, opacity: 0.85, marginTop: 4 },
  sheet: {
    flex: 1,
    backgroundColor: SURFACE,
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  label: { color: LABEL, fontWeight: '700', marginBottom: 6 },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: LINE,
    color: LABEL,
  },
  btn: {
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
    marginTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  btnText: { color: SURFACE, fontWeight: '800', letterSpacing: 0.4 },
  btnOutline: {
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: PRIMARY,
    marginTop: 12,
  },
  btnOutlineText: { color: PRIMARY, fontWeight: '800' },
  link: { color: PRIMARY, fontWeight: '700' },
});
