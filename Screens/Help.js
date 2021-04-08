import React, {Component,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import moment from "moment";
import Date from '../components/Date';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
 
export default class Help extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
   

     };
   }

 
  componentDidMount(){
    fetch("http://192.168.1.7:6000/getproblem")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      
      })
      console.log(responseJson)
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
 
    render(){
     return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop:20,backgroundColor:"#f5fffa",paddingBottom:100}}>
        <View style={{flexDirection:'row'}}>
        <Icons name="arrow-back" size={30}  onPress={() =>navigation.navigate("OrderConfirm")}
         style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
        <Text style={{fontSize:28,marginBottom:20,color:"#696969",fontFamily:"OpenSansBold",}}>Help</Text>
        </View>

        <View style={styles.view5}>
            <Text style={{marginLeft:35,fontSize:18,marginTop:5,fontFamily:"OpenSansSemiBold",
                color:"#696969"}}>Report new Problem</Text>

            <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("ReportProblem")}>
                            <Text style={{
                                backgroundColor: "#FDC913",fontSize:15,fontWeight:'700',
                                color: "white", height: 38, paddingTop: 8, 
                                paddingLeft: 25, paddingBottom: 10,fontFamily:"OpenSansSemiBold",
                                 borderRadius: 20, width: "60%", marginLeft:75,marginTop:20
                            }}>Report Problem</Text>
                        </TouchableOpacity>
            </View>
            <Text style={{fontSize:18,marginLeft:35,marginTop:20,fontFamily:"OpenSansSemiBold",
                color:"#696969"}}>Problem History</Text>
 
      <View>
      <FlatList
      padding ={0}
         data={this.state.dataSource}
         keyExtractor={(item) => item._id}
         renderItem={({item}) => 
         <View>
             <View style={styles.view5}>
             <View style={{flexDirection:'row',marginBottom:20}}>
                <Text style={{marginLeft:15,fontFamily:"OpenSansRegular",
                    marginTop:10,color:"#696969"}}>{item.Problem}</Text>
                <Text style={{marginLeft:40,marginTop:10,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>ID:{item.id}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Date></Date>
                        <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("Earnings")}>
                 <Text style={{
                                backgroundColor: "#FDC913",fontSize:15,fontFamily:"OpenSansSemiBold",
                                color: "white", height: 38, paddingTop: 8, 
                                paddingLeft: 25, paddingRight: 25, paddingBottom: 10,
                                 borderRadius: 20, width: "87%", marginLeft:15,marginTop:20
                            }}>Closed</Text>
                        </TouchableOpacity>
                        </View>
         
         </View>
         </View>
        }
       />
      </View>
     </View>
     </ScrollView>
     
     )}
}
const styles= StyleSheet.create({
    view5: {
        marginBottom: 15,
        marginLeft: 35,
        height: 140,
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
    
})