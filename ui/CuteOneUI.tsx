// ui/CuteOneUI.tsx
import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ViewStyle,
  TextStyle,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

export const COLORS = {
  coral: '#FF7B7B',
  coralDark: '#FF6B6B',
  blue: '#2563EB',
  text: '#111827',
  sub: '#6B7280',
  line: '#E5E7EB',
  bg: '#FFFFFF',
};

export const HeaderWave: React.FC<{
  title: string;
  subtitle?: string;
  bg: ImageSourcePropType; // ảnh 393x852
  height?: number; // chiều cao header hiển thị
  yOffset?: number; // dịch ảnh theo trục Y (âm = kéo ảnh lên)
}> = ({ title, subtitle, bg, height = 300, yOffset = 0 }) => (
  <View style={{ height, backgroundColor: '#fff', overflow: 'hidden' }}>
    {/* Ảnh giữ đúng tỉ lệ 393x852, cố định top-left, cho phép dịch y */}
    <Image
      source={bg}
      resizeMode="cover"
      style={{
        width: '100%',
        aspectRatio: 393 / 852, // GIỮ ĐÚNG TỈ LỆ GỐC
        position: 'absolute',
        left: 0,
        top: yOffset, // canh sóng bằng cách chỉnh số này
      }}
    />
    {/* Text overlay nằm đáy header */}
    <View style={{ position: 'absolute', left: 20, right: 20, bottom: 16 }}>
      <Text style={styles.h1}>{title}</Text>
      {subtitle ? <Text style={styles.h2}>{subtitle}</Text> : null}
    </View>
  </View>
);

export const Sheet: React.FC<{
  children: React.ReactNode;
  style?: ViewStyle;
}> = ({ children, style }) => (
  <View style={[styles.sheet, style]}>{children}</View>
);

export const LineField: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  right?: React.ReactNode;
}> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  right,
}) => (
  <View style={{ marginBottom: 18 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.sub}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={styles.input}
      />
      {right}
    </View>
    <View style={styles.line} />
  </View>
);

export const CuteButton: React.FC<{
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
}> = ({ title, onPress, variant = 'solid' }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={[styles.btn, variant === 'outline' && styles.btnOutline]}
  >
    <Text
      style={[styles.btnText, variant === 'outline' && styles.btnOutlineText]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export const LinkText: React.FC<{
  children: React.ReactNode;
  onPress: () => void;
  style?: TextStyle;
}> = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.link, style]}>{children}</Text>
  </TouchableOpacity>
);

export const RememberRow: React.FC<{
  value: boolean;
  onValueChange: (v: boolean) => void;
  onForgot: () => void;
}> = ({ value, onValueChange, onForgot }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor="#fff"
        trackColor={{ true: COLORS.coralDark, false: '#CBD5E1' }}
      />
      <Text style={{ marginLeft: 8, color: COLORS.sub }}>Remember me</Text>
    </View>
    <LinkText onPress={onForgot} style={{ color: COLORS.coralDark }}>
      Forgot password?
    </LinkText>
  </View>
);

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 28, fontWeight: '900' },
  h2: { color: '#fff', opacity: 0.9, marginTop: 4 },
  sheet: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginTop: -28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  label: { color: COLORS.text, fontWeight: '700', marginBottom: 8 },
  input: { flex: 1, fontSize: 16, color: COLORS.text, paddingVertical: 6 },
  line: { height: 1.2, backgroundColor: COLORS.line, marginTop: 6 },
  btn: {
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.coralDark,
    marginTop: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  btnText: { color: '#fff', fontWeight: '800' },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: COLORS.coralDark,
  },
  btnOutlineText: { color: COLORS.coralDark },
  link: { color: '#2563EB', fontWeight: '700' },
});
