import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity} from 'react-native';

export default function App() {
  const handleButtonPress = () => Alert.alert("Onethingtodo сообщает", "Первое тестовое сообщение", [
    {text: "Ok", onPress: () => console.log('Oke')},
    {text: "Cancel", onPress: () => console.log('Niet')}
  ]);

  const messageBox = <Text style={styles.box}>- Hello there!</Text>
  const messageBox2 = <Text style={styles.box}>- General Kenobi.</Text>

  return (
    <SafeAreaView style={styles.mainBlock}>

      <TouchableOpacity onPress={() => console.log('Жмяк по To do')}>
        <View style={[styles.box, {backgroundColor: 'red'}]} >
          <Text>To do {'\n'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Жмяк по дате')}>
        <View style={[styles.box, {backgroundColor: 'grey'}]}>
          <Text>When {'\n'}Today</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  box: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
