import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

// Dữ liệu nhóm theo chữ cái đầu
const DATA = [
  { title: 'A', data: ['Apple', 'Avocado'] }, // Nhóm A
  { title: 'B', data: ['Banana', 'Blueberry'] } // Nhóm B
];

export default function App() {
  return (
    <SectionList
      sections={DATA} // Truyền danh sách vào SectionList
      keyExtractor={(item, index) => item + index} // Tạo key duy nhất
      renderItem={({ item }) => ( 
        <Text style={styles.item}>{item}</Text> // Hiển thị mục con
      )}
      renderSectionHeader={({ section: { title } }) => ( 
        <Text style={styles.header}>{title}</Text> // Hiển thị tiêu đề nhóm
      )}
    />
  );
}

// Định nghĩa kiểu dáng (style)
const styles = StyleSheet.create({
  item: {
    paddingLeft: 20, // Đẩy lùi nội dung để dễ đọc
    fontSize: 18 // Kích thước chữ
  },
  header: {
    fontWeight: 'bold', // Làm nổi bật tiêu đề nhóm
    backgroundColor: '#eee', // Màu nền để phân biệt nhóm
    padding: 10 // Tạo khoảng cách
  }
});
