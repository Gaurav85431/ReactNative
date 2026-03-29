import { useState } from 'react';
import { Button, StatusBar, View } from 'react-native';

const StatusBarRN = () => {
  const [hide, setHide] = useState(false);
  const [barStyles, setBarStyles] = useState('default'); // light-content(default), dark-content
  const [statusBarColor, setStatusBarColor] = useState('blue');

  return (
    <View>
      {/* <StatusBar backgroundColor="blue" barStyle="dark-content" hidden={true} /> */}

      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={barStyles}
        hidden={hide}
      />

      <Button title="Hide Status Bar" onPress={() => setHide(true)} />
      <Button title="Show Status Bar" onPress={() => setHide(false)} />
      <Button
        title="Update Status Bar Style"
        onPress={() => setBarStyles('dark-content')}
      />

      <Button
        title="Update Status Bar Color"
        onPress={() => setStatusBarColor('red')}
      />
    </View>
  );
};
export default StatusBarRN;
