import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';

const { width: W, height: H } = Dimensions.get('window');
const pxW = (p: number) => (p / 100) * W;
const pxH = (p: number) => (p / 100) * H;

/* ───────── INPUT ───────── */
export const OverlayInput = ({
  left,
  top,
  width,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
}: any) => (
  <View
    style={{
      position: 'absolute',
      left: pxW(left),
      top: pxH(top),
      width: pxW(width),
      height: 56,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 14,
    }}
  >
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#FF6B6B"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={{ fontSize: 16, color: '#111' }}
    />
  </View>
);

/* ───────── BUTTON ───────── */
export const OverlayButton = ({ left, top, width, label, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={{
      position: 'absolute',
      left: pxW(left),
      top: pxH(top),
      width: pxW(width),
      height: 56,
      borderRadius: 10,
      backgroundColor: '#FF6B6B',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>
      {label}
    </Text>
  </TouchableOpacity>
);

/* ───────── LINK HOTSPOT ───────── */
export const OverlayLink = ({ left, top, width, text, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      position: 'absolute',
      left: pxW(left),
      top: pxH(top),
      width: pxW(width),
      paddingVertical: 5,
    }}
  >
    <Text style={{ textDecorationLine: 'underline', color: '#000' }}>
      {text}
    </Text>
  </TouchableOpacity>
);
