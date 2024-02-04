import * as React from 'react';
import { View, Text } from 'react-native';

export default function ç() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#009999' }}>
      <Text
        style={{ padding: 40, fontSize: 30, color: 'black' }}
        numberOfLines={2}>
        Welcome
        <Text style={{ fontWeight: 'bold' }}> to Expo app</Text>
      </Text>
    </View>
  );
}