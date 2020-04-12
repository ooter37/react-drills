import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    
  }

  usernameHandler(e) {
      this.setState({
        username: e.target.value
      })
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value
    })
}

  buttonClick() {
      alert('username: ' + this.state.username + ' password: ' + this.state.password)
      console.log(this.state.username)
      console.log(this.state.password)
  }

  render() {
    return (
    <div className="App">
        <input
        onChange={e => this.usernameHandler(e)}
        ></input>
        <input
        onChange={e => this.passwordHandler(e)}
        ></input>        
        <button onClick={() => this.buttonClick()}>Alert username and password for some reason</button>
        {/* no effing idea why this button command worked but my original <button onClick={this.buttonClick}></button> didn't work */}
    </div>
        ); 
    }
}
export default Login;
