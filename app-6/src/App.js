import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      text: ''
    }
  }

  buttonClick() {
    let toPush = this.state.text
    this.setState({list: this.state.list.concat(toPush)})
    console.log(this.state.list)
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
    console.log(this.state.text)
  }

  render() {
  return (
    <div className="App">
      <input className='input-field'
      onChange={e => this.changeHandler(e)}
      type="text"
      value={this.state.text}
      ></input>
      <button
        onClick={() => this.buttonClick()}
        
      ></button>
    </div>
  );
}
}
export default App;
