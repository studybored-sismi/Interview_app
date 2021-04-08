import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon} from 'react-native-vector-icons/AntDesign';
import moment from "moment";

export default class Date extends React.Component {

constructor(props) {
super(props);
 this.date= props.Time

 };

render() {
const Time = moment().format('D/MM/YYYY, h:mm a');
return (
<View >
    <Text  style={{ marginLeft: 15, marginRight: 0, fontFamily: "OpenSansRegular",
                     color:"#696969",fontSize:15
                        }}>{Time}</Text>

</View>
 );
 }
}
const styles = StyleSheet.create({
container:{
 position: "relative",
 backgroundColor: "orange"
},
title:{
 fontSize: 70,
 color: "#fff",
 letterSpacing: 2,
 top: 180,
 left: 20
},
day:{
 fontSize: 12,
 color: "#fff",
 textAlign:"right"
},
small:{
 fontSize: 16,
 color: "#fff"
}
})