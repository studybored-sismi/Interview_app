import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PushNotificationIOS, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {useFonts} from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Minute from './Screens/Minute';
import OrderConfirm from './Screens/OrderConfirm';
import ActiveOrder from './Screens/ActiveOrder';
import ActiveOrder2 from './Screens/ActiveOrder2';
import DelivOrders from './Screens/DelivOrders';
import PendingOrder from './Screens/PendingOrder';
import CancelOrder from './Screens/CancelOrder';
import PayAccount from './Screens/PayAccount';
import DelivProblem from './Screens/DelivProblem';
import GeneralProblem from './Screens/GeneralProblem';
import OrderProblem from './Screens/OrderProblem';
import Settings from './Screens/Settings';
import Notification from './Screens/Notification';
import Help from './Screens/Help';
import ReportProblem from './Screens/ReportProblem';

import Earnings from './Screens/Earnings';
import EarningDetails from './Screens/EarningDetails';


const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

return (

  <NavigationContainer>
    <Stack.Navigator>

      
    <Stack.Screen name="Minute" component={Minute}
        options={
          { headerShown: false }
        } />
    <Stack.Screen name="OrderConfirm" component={OrderConfirm}
        options={
          { headerShown: false }
        } />
        
    <Stack.Screen name="ActiveOrder" component={ActiveOrder}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="ActiveOrder2" component={ActiveOrder2}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="DelivOrders" component={DelivOrders}
        options={
          { headerShown: false }
        } />
<Stack.Screen name="PendingOrder" component={PendingOrder}
        options={
          { headerShown: false }
        } />

  <Stack.Screen name="CancelOrder" component={CancelOrder}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="PayAccount" component={PayAccount}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="DelivProblem" component={DelivProblem}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="GeneralProblem" component={GeneralProblem}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="OrderProblem" component={OrderProblem}
        options={
          { headerShown: false }
        } />

<Stack.Screen name="Settings" component={Settings}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Notification" component={Notification}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Help" component={Help}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="ReportProblem" component={ReportProblem}
          options={
            { headerShown: false }
          } />




<Stack.Screen name="Earnings" component={Earnings}
          options={
            { headerShown: false }
          } />

 <Stack.Screen name="EarningDetails" component={EarningDetails}
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
