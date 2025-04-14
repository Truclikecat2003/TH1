import React from 'react';
import { View, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      {/* Nút Button */}
      <Button title="Press me" onPress={() => Alert.alert("Hello!")} />

      {/* Nút TouchableOpacity */}
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}>
        <View style={{ padding: 10, backgroundColor: 'lightblue', marginTop: 20 }} />
      </TouchableOpacity>
    </View>
  );
}
