import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './views/SignIn';
import SignUpScreen from './views/SignUp';
import Index from './views/Index';
//import Splash from './views/Splash';

const Stack = createStackNavigator();

//<Stack.Screen name="Splash" component={Splash} />

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}