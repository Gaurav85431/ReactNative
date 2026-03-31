import { Button, Text, View } from 'react-native';

export const AboutComponent = props => {
  console.warn('props', props);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> About is HeRe !</Text>
      <Text> Name == {props.route.params.name} </Text>
      <Button
        title="Go to Login"
        onPress={() => {
          console.log('Press');
          // props.navigation.navigate('Login')
        }}
      />
    </View>
  );
};
