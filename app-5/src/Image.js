import React, { Component } from "react";
import "./App.css";

export default class Image extends Component {
  render() {
    return (
    <div className="App">
       <img  ref="image" src={this.props.url} />
    </div>
        ); 
    }
}
