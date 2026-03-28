import React from 'react';
import { Text, View } from 'react-native';
import StyleReactNative from './ComponentLec11/StyleSheet';
import TextInputField from './ComponentLec11/TextInputField';
import FormInput from './ComponentLec11/FormInput';
import FlatListComponent from './ComponentLec11/FlatList';
import ListWithMap from './ComponentLec11/ListWithMap';
import GridList from './ComponentLec11/GridList';
import FlatListLoop from './ComponentLec11/FlatListLoop';
import SectionListList from './ComponentLec11/SectionList';
import ClassComponent from './ComponentLec11/Class-Component/ClassComponent';
import ClassComponentTwo from './ComponentLec11/Class-Component/ClassComponentTwo';
import UseEffectHook from './ComponentLec11/Hooks/UseEffect';

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
      {/* <ListWithMap /> */}

      {/* Lec 16 */}
      {/* <GridList /> */}

      {/* Lec 17 */}
      {/* <FlatListLoop /> */}

      {/* Lec18 */}
      {/* <SectionListList /> */}

      {/* L19 */}
      {/* <ClassComponent /> */}

      {/* L20 */}
      {/* <ClassComponentTwo /> */}

      {/* L21-22 (Hook) L23 useEffect */}
      <UseEffectHook />
    </View>
  );
};

export default App;
