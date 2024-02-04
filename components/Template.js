import * as React from 'react';
import { View, Text } from 'react-native';


export default function Template() {
  return (
    <View style={{ flex: 20 }}>
      <Text
        style={{ padding: 60, textAlign: "center", fontSize: 30 }}
        numberOfLines={2}>
        Welcome to Expo App</Text>

      <Text
        style={{ paddingHorizontal: 30, textAlign: "center", fontSize: 20 }}>
        Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.Expo Go is a free, open-source sandbox for learning and experimenting with React Native on Android and iOS devices. You can install it directly from app stores, and get up and running within minutes — no need to install a native toolchain and compile an app.</Text>
    </View>
  );
}