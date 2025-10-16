// App.jsx
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens(true);

const Stack = createNativeStackNavigator();
const CURRENT_USER_KEY = 'current_user';
const PRIMARY = '#0DB36B';

// ===== Import component theo THƯ MỤC (tên thư mục VI), FILE tên EN =====
import Welcome from './screens/WelcomeToApp/Welcome';
import Login from './screens/DangNhap/Login';
import Signup from './screens/DangKi/Signup';
import Forgot from './screens/QuenMK/Forgot';
import Menu from './screens/MenuSauLogin/Menu';
import Visitor from './screens/DuKhach/Visitor';
import Expert from './screens/DoanhNghiep/Expert';
import Profile from './screens/Profile/Profile';
import Facebook from './screens/Facebook/Facebook';
export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const s = await AsyncStorage.getItem(CURRENT_USER_KEY);
        // Chưa đăng nhập -> Welcome; Đã đăng nhập -> Feed
        setInitialRoute(s ? 'Menu' : 'Welcome');
      } catch {
        setInitialRoute('Welcome');
      }
    })();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRoute}
      >
        {/* Flow trước đăng nhập */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        {/* Flow sau đăng nhập */}
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Facebook" component={Facebook} />
        <Stack.Screen name="Expert" component={Expert} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Visitor" component={Visitor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
