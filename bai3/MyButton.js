import { TouchableOpacity, Text } from 'react-native';

const MyButton = ({ text, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;
