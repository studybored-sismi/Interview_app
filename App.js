import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Success from './Screens/Success';

const Stack = createStackNavigator();
export default function App() {


return (

  <NavigationContainer>
    <Stack.Navigator>

<Stack.Screen name="Login" component={Login}
              options={
                { headerShown: false }
              } />
  <Stack.Screen name="Profile" component={Profile}
              options={
                { headerShown: false }
              } />

<Stack.Screen name="Success" component={Success}
              options={
                { headerShown: false }
              } />
      </Stack.Navigator>
      </NavigationContainer>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
