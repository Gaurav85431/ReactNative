import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigationTwo = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // sb page pr
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={HomeComponent}
          // agar individual element ke page ko style krna hai
          options={{
            // title: 'Home Title',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'blue', // color name in small
            headerTitleStyle: {
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen name="About" component={AboutComponent} />

        <Stack.Screen name="Login" component={LoginComponent} />

        {/*  */}
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

const AboutComponent = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> About is HeRe !</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

const LoginComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Login is HeRe !</Text>
    </View>
  );
};

export default StackNavigationTwo;
