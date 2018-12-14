import logo from "./assets/logo.png";
import React from "react";
import {ScrollView, View, Text, Button, TextInput} from "react-native-web";


export class Homescreen extends  React.Component{

    render(){
        return (
            <ScrollView style={{padding: 20}}>
                <img src={logo} alt={"Logo"}/>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' onChangeText={this.props.setUsername}/>
                <TextInput placeholder='Password' />
                <View style={{margin:7}} />
                <Button
                    onPress={this.props.handleLoginPress}
                    title="Submit"
                />
            </ScrollView>
        )
    }

}