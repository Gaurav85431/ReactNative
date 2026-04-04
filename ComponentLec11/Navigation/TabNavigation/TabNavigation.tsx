import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

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
