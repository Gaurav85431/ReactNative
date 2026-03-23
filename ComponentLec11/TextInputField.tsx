import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputField = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
      <TextInput
        placeholder="Enter Text"
        style={styles.textInput}
        onChangeText={text => setName(text)}
      />
      <Text style={{ fontSize: 30 }}>Your Name is :{name}</Text>
      {/* Jo value add krenge usko show karna hai to onChangeText ka use krte hai */}

      <TextInput
        placeholder="Enter Text"
        style={styles.textInput}
        value={name} // jo value hai wo state hi de dete hai
        onChangeText={text => setName(text)}
      />
      <Text style={{ fontSize: 30 }}>Your Enter text is :{name}</Text>
      <Button title="Clear" onPress={() => setName('')} />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    backgroundColor: 'green',
  },
});
