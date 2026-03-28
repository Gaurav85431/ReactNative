import { useState } from 'react';
import { Button, Text, View } from 'react-native';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text>Show/ Hide Compoenent</Text>
      <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow(!show)} />
      {show && <Users />}
    </View>
  );
};

const Users = () => {
  return <Text>This is User</Text>;
};

export default ShowHide;
