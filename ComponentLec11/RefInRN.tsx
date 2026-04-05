import React, { useRef } from 'react';
import { Button, TextInput, View } from 'react-native';

// L61
// useRef
const RefInRN = () => {
  const input = useRef();
  const updateInput = () => {
    input.current.focus(); // jispr ref lga hai uspr focus krega
    input.current.setNativeProps({
      fontSize: 24,
      color: 'green',
    });
  };
  return (
    <View>
      <TextInput
        ref={input}
        style={{ fontSize: 20 }}
        placeholder="enter text"
      />
      <TextInput style={{ fontSize: 20 }} placeholder="enter text 2" />
      <Button title="Update" onPress={updateInput} />
    </View>
  );
};

export default RefInRN;
