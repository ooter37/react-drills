import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataArray: ["dog", "cat", "string", "yes", "doggy"],
      text: ""
    };
  }

  changeHandler(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.state.dataArray
            .filter(val => val.startsWith(this.state.text))
            .map((i, index) => {
              return <div key={index}>{i}</div>;
            })}
        </div>
        <input
          onChange={e => this.changeHandler(e.target.value)}
          type="text"
          className="input"
        ></input>
      </div>
    );
  }
}
export default App;
