import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Feather';

export default class Minute extends Component{
  state={
    count:15
  }
  render() {
  return (
    <View style={styles.container}>
        <Icon name="clock" size={45} style={{color:"#FDC913",marginTop:200}}></Icon>

      <Text style={styles.text1}>How long will this take </Text>

      <Text style={{color:"#696969",fontFamily:"OpenSansSemiBold"}}>to prepare ?</Text>

      <View style={styles.view5}>
        <TouchableOpacity>
        <Icon2 name="plus" style={styles.plus} onPress={() =>this.setState({count: this.state.count + 1 })}></Icon2>
        </TouchableOpacity>

        <Text style={styles.min}>{this.state.count} min</Text>
        
        <Icon1 name="minus" onPress={() =>this.setState({count: this.state.count - 1 })}
        style={{fontSize:25,color:"#696969"}}></Icon1>
        
      </View>
      <Text style={styles.Done}
     onPress={()=>this.props.navigation.navigate("Help")} >Done</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#f5fffa"
  },
  text1:{
    marginTop:20,
    color:"#696969",
    fontFamily:"OpenSansSemiBold"
  },
 min:{
  marginLeft:85,
  marginRight:75,
  paddingTop:5,
  color:"#696969",
  fontFamily:"OpenSansSemiBold"
  
 },
 plus:{
  marginLeft:10,
  fontSize:25,
  color:"#696969"
},
 Done:{
   color:"white",
   paddingTop:25,
   paddingLeft:150,
   marginTop:100,
  backgroundColor:"#FDC913",
   width:"100%",
   height:"15%",
   fontSize:25,
   fontFamily:"OpenSansBold"
  },
    view5: {
        marginBottom: 50,
        marginLeft: 30,
        height: 50,
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
        marginTop:20,
        marginRight:30,
        flexDirection:'row'

    },
    
});
