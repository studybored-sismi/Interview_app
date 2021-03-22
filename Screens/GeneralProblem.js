import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const GeneralProblem= ({navigation})=>{
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:300}}>
                 <View style={{flexDirection:'row'}}>

            <Icons name="arrow-back" size={30}
             style={styles.Icons}></Icons>
            <Text style={styles.Heading}>General Problem</Text>
            </View>

            <View style={styles.view5}>
            <Text style={styles.text1}>Not Receiving Orders</Text>
            </View>

            <View style={styles.view5}>
            <Text style={styles.text2}>Orders</Text>
            </View>
        </View>
    )
}

export default GeneralProblem;

const styles= StyleSheet.create({
    Icons:{
        marginLeft:20,
        marginRight:10,
        color:"#FDC913"
},
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
        
        //flexDirection:'row'

    },
    Heading:{
        fontSize:24,
        marginBottom:40,
        color:"#696969",
        fontFamily:"OpenSansBold"
    },
    burger:{
        marginLeft:25,
        marginTop:15,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    rs:{
        marginLeft:25,
        marginTop:15,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    time: {
    marginLeft:25,
    marginTop:10,
    color:"#696969",
    fontFamily:"OpenSansRegular"
},
deliver:{
    marginLeft:10,
    marginTop:10,
    fontSize:20,
    color:"#696969",
    fontFamily:"OpenSansSemiBold"
},
text1:{
    marginLeft:60,
    marginTop:5,
    color:"#696969",
    fontFamily:"OpenSansSemiBold",
    fontSize:15
},
text2:{
    marginLeft:110,
    marginTop:5,
    color:"#696969",
     fontFamily:"OpenSansSemiBold",
     fontSize:15
    }
    
})