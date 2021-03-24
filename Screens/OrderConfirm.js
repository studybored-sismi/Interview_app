import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const OrderConfirm= ({navigation}) => {
    return(
        <View style={{backgroundColor:"#f5fffa",paddingBottom:200}}>
        <View style={styles.view5}>
            <Icon name="check-outline" size={30} style={styles.icon}></Icon>
            <Text style={styles.order}>ORDER CONFIRMED</Text>
            <Text style={styles.text1} onPress={() => navigation.navigate("EarningDetails")}>Taking you to next time...</Text>
        </View>

        </View>
    )
}

export default OrderConfirm;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#f5fffa"
    },
  icon:{
      color:"#FDC913",
      marginTop:40,
      marginLeft:120
    },
    order:{
        marginTop:10,
        marginLeft:50,
        color:"#696969",
        fontFamily:"OpenSansBold",
        fontSize:18
    },
    text1:{
        marginLeft:50,
        marginTop:10,
        color:"#696969",
        fontFamily:"OpenSansSemiBold"
    },

      view5: {
          marginBottom: 50,
          marginLeft: 35,
          height: 250,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          // paddingLeft: 120,
          padding:10,
          marginTop:200,
          marginRight:30,
         // flexDirection:'row'
  
      },
      
  });
  