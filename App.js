import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Тапнули по тексту');

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={handleTextPress}>Первое приложение {'\n'}тестовое сообщение</Text>
      <Button title={'Старт'} color="red" onPress={handleTextPress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red'
  },
});
