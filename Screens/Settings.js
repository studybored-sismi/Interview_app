import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const Settings= ()=>{
    return(
        <View style={{paddingTop:50,paddingBottom:300,backgroundColor:"#f5fffa"}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={styles.Icons}></Icons>
            <Text style={styles.Settings}>Settings</Text>
            </View>

            <View style={styles.view5}>
            <Text 
            style={styles.contact}>Contact</Text>
          
            </View>

            <View style={styles.view5}>
            <Text  
            style={styles.mode}>Mode</Text>
          
            </View>
        </View>
    )
}

export default Settings;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 30,
        marginLeft: 35,
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
    Settings:{
        fontSize:24,
        color:"#696969",
        fontFamily:"OpenSansBold",
        marginBottom:40
},
contact:{
    paddingLeft:100,
    paddingTop:5,
    color:"#696969",
    fontSize:17,
    fontFamily:"OpenSansSemiBold",
},
mode:{
    paddingLeft:110,
    paddingTop:5,
    fontSize:17,
    color:"#696969",
    fontFamily:"OpenSansSemiBold",
},
Icons:{
    marginLeft:20,
    marginRight:20,
    color:"#FDC913"
}
})