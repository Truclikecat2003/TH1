import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Sắp xếp ngang
    justifyContent: 'space-around', // Cách đều
    alignItems: 'center', // Căn giữa theo chiều dọc
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#7ce0f9',
    justifyContent: 'center',// Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },
});
// Định nghĩa component Square hiển thị một ô vuông với nội dung
const Square = ({ text }) => (
  <View style={styles.box}>
    <Text>{text}</Text> {/* Hiển thị số bên trong ô vuông */}
  </View>
);
// Component chính của ứng dụng
export default () => (
  <View style={styles.container}>
    <Square text="1" />
    <Square text="2" />
    <Square text="3" />
  </View>
);
