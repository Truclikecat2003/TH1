import React from 'react';
import { View } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      {/* Gọi tên của cái file js cần dùng lại ở đây */}
      <MyButton
        text="Click Here"
        onPress={() => alert('Pressed!')}
        style={{ padding: 10, backgroundColor: 'orange' }}
      />
    </View>
  );
}
