import React from 'react';
import { Text, View } from 'react-native';
import StyleReactNative from './ComponentLec11/StyleSheet';
import TextInputField from './ComponentLec11/TextInputField';
import FormInput from './ComponentLec11/FormInput';
import FlatListComponent from './ComponentLec11/FlatList';
import ListWithMap from './ComponentLec11/ListWithMap';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}> Hello </Text>
      {/* <StyleReactNative /> */}
      {/* <TextInputField /> */}

      {/* <FormInput /> */}

      {/* Lec 14 */}
      {/* <FlatListComponent /> */}

      {/* Lec 15 */}
      <ListWithMap />
    </View>
  );
};

export default App;
