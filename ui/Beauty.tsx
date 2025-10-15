// ui/Beauty.tsx
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

const G1 = '#C31432'; // đỏ rượu
const G2 = '#240B36'; // tím đậm
const WHITE = '#fff';
const MUTED = 'rgba(255,255,255,0.75)';
const LINE = 'rgba(255,255,255,0.35)';

export const ScreenGradient: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <LinearGradient
    colors={[G1, G2]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
    {children}
  </LinearGradient>
);

export const Card: React.FC<{
  children: React.ReactNode;
  style?: ViewStyle;
}> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export const H1: React.FC<{ children: React.ReactNode; style?: TextStyle }> = ({
  children,
  style,
}) => <Text style={[styles.h1, style]}>{children}</Text>;

export const H2: React.FC<{ children: React.ReactNode; style?: TextStyle }> = ({
  children,
  style,
}) => <Text style={[styles.h2, style]}>{children}</Text>;

export const UnderlineField: React.FC<{
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
  <View style={{ marginBottom: 18 }}>
    {label ? <Text style={styles.fieldLabel}>{label}</Text> : null}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={MUTED}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
      style={styles.fieldInput}
    />
    <View style={styles.fieldLine} />
  </View>
);

export const GradientButton: React.FC<{
  title: string;
  onPress: () => void;
  ghost?: boolean; // viền trắng, nền trong
}> = ({ title, onPress, ghost }) => {
  if (ghost) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.ghostBtn}
      >
        <Text style={styles.ghostText}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <LinearGradient
        colors={[G1, G2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradBtn}
      >
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const LinkText: React.FC<{
  children: React.ReactNode;
  onPress: () => void;
  style?: TextStyle;
}> = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.link, style]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  h1: {
    color: WHITE,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 48,
    marginHorizontal: 20,
  },
  h2: {
    color: WHITE,
    opacity: 0.85,
    fontSize: 16,
    marginTop: 4,
    marginHorizontal: 20,
  },

  fieldLabel: {
    color: '#CC2E43',
    fontWeight: '800',
    fontSize: 13,
    marginBottom: 6,
  },
  fieldInput: { color: '#222', fontSize: 16, paddingVertical: 6 },
  fieldLine: { height: 1.2, backgroundColor: LINE },

  gradBtn: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  btnText: { color: WHITE, fontWeight: '800', letterSpacing: 1 },

  ghostBtn: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: WHITE,
    marginTop: 14,
  },
  ghostText: { color: WHITE, fontWeight: '800', letterSpacing: 1 },

  link: { color: '#3F3D56', textDecorationLine: 'underline' },
});
