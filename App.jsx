// App.jsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens (đúng vị trí bạn yêu cầu)
import Welcome from './screens/WelcomeToApp/Welcome.jsx';
import Login from './screens/DangNhap/Login.jsx';
import Signup from './screens/DangKi/Signup.jsx';
import Forgot from './screens/QuenMK/Forgot.jsx';

// Màn sau đăng nhập + chi tiết
import Expert from './screens/DoanhNghiep/Expert.jsx';
import Visitor from './screens/DuKhach/Visitor.jsx';
import Profile from './screens/Profile/Profile.jsx';
import Menu from './screens/MenuSauLogin/Menu.jsx';

const Stack = createNativeStackNavigator();
const CURRENT_USER_KEY = 'current_user';

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
        <Stack.Screen name="Expert" component={Expert} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Visitor" component={Visitor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
