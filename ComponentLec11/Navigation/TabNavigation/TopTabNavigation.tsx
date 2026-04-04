import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

// Bottom Navigation
const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNavigation;

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  );
};
