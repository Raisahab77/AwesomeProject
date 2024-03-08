import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Button, 
  TouchableOpacity, 
  Alert,
  TextInput
} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  function handleAlert(){
    Alert.alert("My title","Button pressed",[
      {text:"Yes", onPress:()=>console.log("Yes pressed")},
      {text:"No", onPress:()=>console.log("No pressed")}
    ]);
  }

  function handlePrompt(){
    console.log("Prompt clicked!!");
    Alert.prompt("My title","Button pressed",text=>console.log(text));
  }

  function handleSubmit(){
    console.log("The text is : " + text + "and the number is : " + number);
  }
  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.red}>Hello World form react</Text>
          <Text>First part and </Text>
          {/* <TouchableOpacity onPress={()=>console.log("Image clicked")}>
              <Image source={require("./assets/jerry.jpeg")} />
          </TouchableOpacity> */}
          
          <Button
            color="orange"
            title='Alert' onPress={handleAlert} />

          {/* This will only works in IOS and not on android */}
          <Button
            color="red"
            title='Prompt' onPress={handlePrompt} />

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />

          <Button title='Submit' onPress={handleSubmit} />
          
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  red : {
    color:'red',
    fontSize:40,
    fontWeight:'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
