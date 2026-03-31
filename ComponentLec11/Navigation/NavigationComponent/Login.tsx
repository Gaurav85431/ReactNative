import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export const LoginComponent = props => {
  const name = 'Gaurav';
  const age = 25;
  const [nm, setNm] = useState('');
  const [ag, setag] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Login is HeRe !</Text>
      {/* <TextInput
        onChangeText={() => props.navigation.navigate('Home', { name, ages })}
      /> */}
      <TextInput onChangeText={text => setNm(text)} />
      <Button
        title="Go to Home"
        onPress={() => {
          // props.navigation.navigate('Home', { name: 'GP', age: 25 }); // data passed
          props.navigation.navigate('Home', { name, age });
          // props.navigation.navigate('Home', { nm, age });
          // props.navigation.navigate('Home', { name: nm, age });
        }}
      />
    </View>
  );
};
