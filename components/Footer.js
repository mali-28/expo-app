import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={{ marginBottom: 10, padding: 5, backgroundColor: '#009999' }}>
      <Text
        style={{ fontSize: 15, textAlign: "center", color: 'black' }}
        numberOfLines={1}>
        <Text style={{ fontWeight: 'bold' }}> All rights reserved by expo app, 2024</Text>
      </Text>
    </View>
  );
}