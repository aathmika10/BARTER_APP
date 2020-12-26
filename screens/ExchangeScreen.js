import React,{Component} from 'react';
import { View,Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from "firebase";
import MyHeader from'../components/MyHeader';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
        userId:firebase.auth().currentUser.email,
        thingName:"",
        reasonToRequest:""
    }
}
createUniqueId(){
    return Math.random().toString(36).substring(7)
}
addRequest=(thingName,reasonToRequest)=>{
    var userId=this.state.userId
    var randomRequestId=this.createUniqueId()

    db.collection("requested_things").add({
        "user_id":userId,
        "thing_name":thingName,
        "reason_to_request":reasonToRequest,
        "request_id":randomRequestId
    })
    this.setState({
        thingName:"",
        reasonToRequest:""
    })
    return Alert.alert("thing requested successfully")
}
    render(){
        return(

            <View style={{flex:1}}>
                <MyHeader title="Exchange things"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput 
                    style={styles.formTextInput}
                    placeholder={"enter thing name"}
                    onChangeText={(text)=>{
                        this.setState({
                            thingName:text
                        })
                    }}
                    value={this.state.thingName}
                    />
                    <TextInput 
                    style={[styles.formTextInput,{height:300}]}
                    multiline
                    numberOfLines={8}
                    placeholder={"Why do you need the thing"}
                    onChangeText={(text)=>{
                        this.setState({
                            reasonToRequest:text
                        })
                    }}
                    value={this.state.reasonToRequest}/>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{this.addRequest(this.state.thingName,this.state.reasonToRequest)}}>
                        <Text>REQUEST</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#00000',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#9314ba",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
      }
    )