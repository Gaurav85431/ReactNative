import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const UnmountedComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text>Show/ Hide Compoenent</Text>
      <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow(!show)} />
      {/* {show && <Users />} */}
      {show ? <Users /> : null}
    </View>
  );
};

const Users = () => {
  const timer = setInterval(() => {
    console.log('timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return <Text>This is User</Text>;
};

export default UnmountedComponent;
