import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginComponent } from './NavigationComponent/Login';
import { HomeComponent } from './NavigationComponent/Home';
import { AboutComponent } from './NavigationComponent/About';

const Stack = createNativeStackNavigator();

const StackNavigationFourProps = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        {/* <Stack.Screen name="Login" component={LoginComponent} /> */}

        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Home" component={HomeComponent} />

        <Stack.Screen name="About" component={AboutComponent} />
        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//  agar component ko handleRight me chahe to de skte hia

const HeaderComponent = () => {
  // return <Button title="ButtonHere Header" />;
  return <TextInput placeholder="ButtonHere Header" />;
};

export default StackNavigationFourProps;
