import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handleButtonPress = () => Alert.alert("Onethingtodo сообщает", "Первое тестовое сообщение", [
    {text: "Ok", onPress: () => console.log('Oke')},
    {text: "Cancel", onPress: () => console.log('Niet')}
  ]);
  const handlePressButton2 = () => Alert.prompt("Запрос данных", "Введите ваши данные", text => console.log(text));

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>Первое приложение {'\n'}тестовое сообщение</Text>
      <Button title={'Старт'} color="red" onPress={handleButtonPress}/>
      <Button title={'Введите данные'} onPress={handlePressButton2}/>
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
