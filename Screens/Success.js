import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function Success() {
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/tick.png')} style={{marginTop:50}}></Image>

      
       
       <Text style={{color:"#474747",fontSize:25,marginTop:0}}>Success!</Text>

      <Text style={{color:"#858585",marginBottom:180}}>Your account has been Created</Text>

      <LinearGradient
        // Button Linear Gradient
        colors={['#00B7C9', '#02D384']}
        style={styles.button}>
        <Text style={styles.text}>Login your Account</Text>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:"black"
  },

  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width:"80%",
    borderColor:"#00000029"
    
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
