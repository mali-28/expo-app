import * as React from 'react';
import { View, Text } from 'react-native';

export default function ç() {
  return (
    <View style={{ flex: 2, paddingBottom: 5, justifyContent: "flex-end", backgroundColor: '#009999' }}>
      <Text
        style={{ fontSize: 30, textAlign: "center", color: 'black' }}
        numberOfLines={1}>
        <Text style={{ fontWeight: 'bold' }}> Expo app</Text>
      </Text>
    </View>
  );
}