// App.jsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens (đúng vị trí bạn yêu cầu)
import Welcome from './Welcome.jsx';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
import Forgot from './screens/Forgot.jsx';

// Màn sau đăng nhập + chi tiết
import Feed from './Feed.jsx';
import Details from './Details.jsx';

const Stack = createNativeStackNavigator();
const CURRENT_USER_KEY = 'current_user';

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const s = await AsyncStorage.getItem(CURRENT_USER_KEY);
        // Chưa đăng nhập -> Welcome; Đã đăng nhập -> Feed
        setInitialRoute(s ? 'Feed' : 'Welcome');
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
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
