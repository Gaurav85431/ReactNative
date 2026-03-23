import React from 'react';
import { Text, View } from 'react-native';
import StyleReactNative from './ComponentLec11/StyleSheet';
import TextInputField from './ComponentLec11/TextInputField';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}> Hello </Text>
      {/* <StyleReactNative /> */}
      <TextInputField />
    </View>
  );
};

export default App;
