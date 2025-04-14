import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

// Component tùy chỉnh hiển thị từng mục
const ListItem = ({ item }) => (
  <View style={{ padding: 10, borderBottomWidth: 1 }}>
    <Text>{item}</Text>
  </View>
);
// Tạo hộp nhập (TextInput) để thêm mục vào danh sách. 
//  Nút gửi (Button) để lưu mục mới vào danh sách. 
//  Hiển thị danh sách (FlatList) chứa các mục đã nhập.
export default function App() {
  const [items, setItems] = useState([]); // Lưu danh sách mục
  const [input, setInput] = useState(''); // Lưu nội dung nhập vào

  // Hàm thêm mục mới
  const addItem = () => {
    if (input.trim() !== '') { // Kiểm tra không để trống
      setItems([...items, input]); // Thêm mục vào danh sách
      setInput(''); // Xóa nội dung nhập sau khi thêm
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Ô nhập dữ liệu */}
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Nhập mục..."
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      {/* Nút thêm */}
      <Button title="Thêm" onPress={addItem} />

      {/* Danh sách mục */}
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}
