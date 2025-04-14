import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 40 }}>
      <Text>You clicked {count} times</Text>
      {/* Đặt hai nút ngang nhau */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="Click me" onPress={() => setCount(count + 1)} />
        <Button title="Reset" onPress={() => setCount(0)} /> 
          {/*set số lần trong ngoặc */}
      </View>
    </View>
  );
}
