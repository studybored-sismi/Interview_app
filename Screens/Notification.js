import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notification= ()=>{
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:400}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={styles.Icons}></Icons>
            <Text style={styles.Notification}>Notification</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={styles.name}>Customer Name</Text>
            <Text style={styles.item}>Item</Text>
            
            <TouchableOpacity style={{ paddingTop: 5 }}>
                            <Text style={styles.confirm}>Confirm</Text>
                        </TouchableOpacity>
            </View>
        </View>
    )
}

export default Notification;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 35,
        height: 160,
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
        //flexDirection:'row'

    },
    item:{
        paddingLeft:20,
        paddingTop:5,
        marginRight:90,
        color:"#696969",
    fontSize:18,
    marginBottom:10,
    fontFamily:"OpenSansSemiBold",
},
name:{
    paddingLeft:20,
    paddingTop:5,
    marginRight:90,
    color:"#696969",
fontSize:18,
marginBottom:10,
fontFamily:"OpenSansSemiBold",
},
Notification:{
    fontSize:24,
    marginBottom:40,
    fontFamily:"OpenSansBold",
    color:"#696969"
},
Icons:{
    marginLeft:20,
    marginRight:20,
    color:"#FDC913"
},
confirm:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansSemiBold",
    color: "white", 
    height: 38,
     paddingTop: 8,
    fontWeight:'700', 
    paddingLeft: 36, 
    paddingRight: 20,
     paddingBottom: 10,
     borderRadius: 20,
      width: "46%", 
      marginLeft:125,
      marginTop:0
}

    
})