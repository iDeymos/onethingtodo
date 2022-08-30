import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form ({addHandler}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

  return (
    <View> 
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Напишите задачу'></TextInput>
        <Button title='Добавить задачу' color='green' onPress={() => addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});