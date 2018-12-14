import React from 'react';
import './App.css';
import {Homescreen} from "./Homescreen";
import {Profile} from "./Profile";

class App extends React.Component {
    constructor(props){
        super(props)
        this.handleLoginPress = this.handleLoginPress.bind(this);
        this.handleLogoutPress = this.handleLogoutPress.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    state = {
        loggedIn: false,
        username: ""
    }
    setUsername = (event) =>{
        console.log("Setting username: ", event);
        this.setState({username: event});
    }

    handleLoginPress = (event) => {
        this.setState({loggedIn: true});
    }
    handleLogoutPress = (event) => {
        this.setState({loggedIn: false});
    }

    renderScreen = () => {
        if(this.state.loggedIn === false){
            return <Homescreen handleLoginPress ={this.handleLoginPress} setUsername={this.setUsername}/>;
        }else{
            return <Profile handleLogoutPress ={this.handleLogoutPress} username={this.state.username}/>;
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.renderScreen()}
                </header>
            </div>
        );
    }
}

export default App;
