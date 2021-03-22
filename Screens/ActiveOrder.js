import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';

const ActiveOrder= ({navigation}) => {
    return(
        <View style={{backgroundColor:"#f5fffa",paddingBottom:400,paddingTop:20}}>
            <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={styles.Icons}></Icons>
            <Text style={styles.Active}>Active Order</Text>
            </View>
            
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ paddingTop: 5 }} >
                            <Text style={styles.all}>All</Text>
                        </TouchableOpacity>
                        
            <TouchableOpacity style={{ paddingTop: 5 }} >
                            <Text style={
                                styles.prepare
                            }>Preparing</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={{ paddingTop: 5 }} >
                            <Text style={styles.pending}>Pending</Text>
                        </TouchableOpacity>

                       
               
       
                        
            <TouchableOpacity style={{ paddingTop: 5 }} >
                            <Text style={styles.cancel}>Cancelled</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={{ paddingTop: 5 }}>
                            <Text style={styles.deliv}>Delivered</Text>
                        </TouchableOpacity>

                        </View>
                        </ScrollView>
                        
            <View style={styles.view5}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.prepare1}> PREPARING</Text>
                <Icon1 name="arrowright" size={30} style={styles.Icon1}></Icon1>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.burger}>Burger</Text>
                <Text style={styles.rs}>Rs. 360</Text>
                </View>
                <Text style={styles.pm}>10.45 pm</Text>
            </View>
        </View>

    )
    }
    export default ActiveOrder;
    const styles = StyleSheet.create({
        view5: {
            marginBottom: 50,
            marginLeft: 42,
            height: 150,
            width: "76%",
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            // paddingLeft: 120,
            padding:10,
            marginTop:50,
            marginRight:30,
           // flexDirection:'row'
    
        },
        Icons:{
            marginLeft:20,
            marginRight:5,
            color:"#FDC913",
            marginTop:20
    },
    Active:{
        marginLeft:25,
        marginTop:25,
        fontSize:25,
        marginBottom:10,
        fontFamily:"OpenSansBold",
        color:"#696969"
},
prepare:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansBold",
    color: "white",
    height: 38, 
    paddingTop: 8, 
    paddingLeft: 18, 
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 20,
    width: "80%",
    marginLeft:33,
    marginTop:20
},
cancel:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansBold",
    color: "white", 
    height: 38, 
    paddingTop: 8, 
    paddingLeft: 20,
    paddingRight: 6, 
    paddingBottom: 10,
     borderRadius: 20,
     width: "100%",
      marginLeft:18,
      marginTop:20
},
all:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansBold",
    color: "white", 
    height: 38, 
    paddingTop: 8, 
    paddingLeft: 36,
    paddingRight: 20, 
    paddingBottom: 10,
     borderRadius: 20,
     width: "100%", 
     marginLeft:15,
     marginTop:20
},
pending:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansBold",
    color: "white",
    height: 38,
    paddingTop: 8, 
    paddingLeft: 20, 
    paddingRight: 15,
    paddingBottom: 10,
    borderRadius: 20,
    width: "80%",
    marginLeft:24,
    marginTop:20
},
deliv:{
    backgroundColor: "#FDC913",
    fontSize:15,
    fontFamily:"OpenSansBold",
    color: "white",
    height: 38,
    paddingTop: 8, 
    paddingLeft: 20,
    paddingRight: 10, 
    paddingBottom: 10,
     borderRadius: 20,
     width: "80%", 
     marginLeft:35,
     marginTop:20
},
rs:{
    marginTop:10,
    marginLeft:130,
    color:"#696969",
    fontFamily:"OpenSansRegular"
},
prepare1:{
    marginTop:20,
    marginLeft:15,
    fontSize:20,
    fontFamily:"OpenSansSemiBold",
    color:"#696969"
},
pm:{
    marginTop:10,
    marginLeft:18,
    color:"#696969",
    fontFamily:"OpenSansRegular"
},
burger:{
    marginLeft:18,
    marginTop:10,
    color:"#696969",
    fontFamily:"OpenSansRegular"
},
Icon1:{
    marginLeft:80,
    marginTop:20,
    marginRight:20,
    color:"#FDC913"
},
        
    });
    