import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomeComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// By default har component me props me data ata hai
const HomeComponent = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Home Component is HeRe !</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('About')}
      />
      {/* Jo compoenent me jana hai to uska jo name hai wo dena hai jisse register kye hai
        <Stack.Screen name="About" component={AboutComponent} />
      
      
      <-  back button bydefault ata hai
      */}
    </View>
  );
};

const AboutComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> About is HeRe !</Text>
    </View>
  );
};

export default StackNavigation;
