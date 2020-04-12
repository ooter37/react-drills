import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
constructor() 
{
  super()
  this.state = {
    text: ''
  }
}

changeHandler(value) {
  this.setState({text: value})
}

render() {
  return (
    <div className="App">
     <input onChange={e => this.changeHandler(e.target.value)} type='text' className="input"></input>
     <div>{this.state.text}</div>
    </div>
  )
}
}

export default App;