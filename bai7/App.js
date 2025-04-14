import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

// Component chính của ứng dụng
export default function App() {
  // useState để lưu tên người dùng nhập vào
  const [name, setName] = useState('');

  return (
    <View style={{ padding: 20 }}>
      {/* Hiển thị dòng hỏi tên */}
      <Text>What is your name?</Text>

      {/* Ô nhập tên */}
      <TextInput
        value={name} // Hiển thị giá trị nhập vào
        onChangeText={setName} // Cập nhật state khi người dùng nhập
        style={{ borderBottomWidth: 1, marginBottom: 10 }} // Định dạng viền dưới
        placeholder="Enter name" // Hiển thị văn bản gợi ý
      />

      {/* Nút bấm để hiển thị thông báo chào */}
      <Button title="Submit" onPress={() => alert(`Hello, ${name}!`)} />
    </View>
  );
}
