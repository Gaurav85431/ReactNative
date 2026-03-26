import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const { useState } = require('react');

const FormInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  return (
    <View>
      <Text>Form In React Native📱</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Password"
        secureTextEntry={true} // Password visible show na krne ke liye
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <View style={{ marginBottom: 10 }}>
        <Button
          color={'green'}
          title="Show Details"
          onPress={() => setDisplay(true)}
        />
        <Button
          title="Clear Details"
          onPress={() => {
            setDisplay(false), setName(''), setEmail(''), setPassword('');
          }}
        />
      </View>
      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 25 }}>Name={name}</Text>
            <Text style={{ fontSize: 25 }}>Email={email}</Text>
            <Text style={{ fontSize: 25 }}>Password={password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    marginTop: 3,
  },
});

export default FormInput;
