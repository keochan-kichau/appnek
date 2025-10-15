// ui/GreenAuthUI.tsx
import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
const GREEN = '#0DB36B';
const TEXT = '#1A1A1A';
const MUTED = '#8C8C8C';
const BORDER = '#E7ECE9';

/** Container: nhận bgSource (ảnh nền của bạn) + phủ gradient nhẹ */
export const ScreenContainer: React.FC<{
  children: React.ReactNode;
  bgSource?: any; // <= thêm prop này
  showOverlay?: boolean; // phủ gradient mềm (mặc định true)
}> = ({ children, bgSource, showOverlay = true }) => (
  <ImageBackground
    source={bgSource} // <= ảnh nền của bạn
    style={{ flex: 1 }}
    resizeMode="cover"
    imageStyle={{ width: '100%', height: '100%' }}
  >
    {showOverlay && (
      <LinearGradient
        colors={['#F7FFFBaa', '#EAF6F1aa', '#E2F6EEaa']} // “aa” = ~66% opacity
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
    )}

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pagePadding}>{children}</View>
    </SafeAreaView>
  </ImageBackground>
);

/** Card trắng bo tròn cho form */
export const Card: React.FC<{
  children: React.ReactNode;
  style?: ViewStyle;
}> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

/** Input “mềm” */
export const InputBox: React.FC<{
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  style?: ViewStyle;
}> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  style,
}) => (
  <TextInput
    style={[styles.input, style]}
    placeholder={placeholder}
    placeholderTextColor={MUTED}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    autoCapitalize="none"
  />
);

export const PrimaryButton: React.FC<{
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}> = ({ title, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={[styles.primaryBtn, style]}
  >
    <Text style={styles.primaryBtnText}>{title}</Text>
  </TouchableOpacity>
);

export const SecondaryButton: React.FC<{
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}> = ({ title, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.88}
    style={[styles.secondaryBtn, style]}
  >
    <Text style={styles.secondaryBtnText}>{title}</Text>
  </TouchableOpacity>
);

export const TextLink: React.FC<{
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}> = ({ text, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[{ alignSelf: 'center' }, style]}>
    <Text style={styles.linkText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pagePadding: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 12,
    fontSize: 15,
    color: TEXT,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: GREEN,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  secondaryBtn: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E3E6E4',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: { color: '#8C8C8C', fontWeight: '700' },
  linkText: {
    color: '#8C8C8C',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
