import * as React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, } from "react-native";
import SecondController from "./SecondController";


export default class Second extends SecondController{  

  render() {
    return (

      <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>

       <View style={{paddingLeft:15,marginBottom:50,marginTop:20}}>
         <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
       <Text style={{color:'blue'}}> BACK </Text>
       </TouchableOpacity>
      </View>

        <View style={{borderWidth:0.5,marginTop:20,margin:20,justifyContent:'space-evenly',flex:0.5,paddingLeft:20,borderRadius:15}}>
        
        <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'700'}}>Name  :- </Text>
        <Text> {this.state.name}</Text>
        </View>
       
        <View>
        <Text style={{fontWeight:'700'}}>Nasa Jpl URL :- </Text>
        <Text style={{marginTop:10}}> {this.state.nasa_jpl_url}</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'700'}}>is_potentially_hazardous_asteroid :- </Text>
        <Text> {this.state.hazardous_asteroid}</Text>
        </View>
       
        </View>
      </SafeAreaView>
    );
  }
}
