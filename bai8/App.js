import React from 'react';
import { FlatList, View, Text } from 'react-native';

// Tạo danh sách 50 mục với key và tên
const data = Array.from({ length: 50 }, (_, i) => ({
  key: `${i}`,   // Định danh duy nhất cho mỗi mục
  name: `Item ${i + 1}` // Tên hiển thị của mục
}));

export default function App() {
  return (
    // FlatList giúp tối ưu danh sách dài
    <FlatList
      data={data} // Cung cấp danh sách cho FlatList
      renderItem={({ item }) => ( // Hiển thị từng mục trong danh sách
        <View style={{ padding: 10 }}> {/* Tạo khoảng cách giữa các mục */}
          <Text>{item.name}</Text> {/* Hiển thị nội dung của từng mục */}
        </View>
      )}
    />
  );
}
