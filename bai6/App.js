import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      {[...Array(20)].map((_, i) => (
        <Text key={i} style={{ padding: 10 }}>Item {i + 1}</Text>
      ))}
    </ScrollView>
  );
}
