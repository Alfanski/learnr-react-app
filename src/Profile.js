import React from "react";
import {Button} from "react-native-web";
import Text from "react-native-web/dist/exports/Text";


export class Profile extends React.Component {


    render(){
        return (<div>
            <Text>Welcome, {this.props.username}!</Text>
            <Button onPress={this.props.handleLogoutPress} title={"Logout"}/>
        </div>);
    }
}