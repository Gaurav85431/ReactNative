import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export const HomeComponent = props => {
  console.log('props', props.route.params);
  const [name, setName] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Home is HeRe !</Text>
      {/* <Text> Name = ${props.route.params.
      name} !</Text>
      <Text> Age = ${props.route.params.age} !</Text> */}
      <Text> Name = {props.route.params.name} </Text>
      <Text> Age = {props.route.params.age} </Text>

      <TextInput
        placeholder="Enter Text"
        onChangeText={txt => {
          console.warn('text>>', txt), setName(txt);
        }}
      />

      {/* <Button
        title="Go to About"
        onPress={() => {
          console.log('Press');
          props.navigation.navigate('About', { name: 'GPGP' });
        }}
      /> */}

      <Button
        title="Go to About"
        onPress={() => {
          console.log('Press');
          props.navigation.navigate('About', { name: name });
        }}
      />
    </View>
  );
};
