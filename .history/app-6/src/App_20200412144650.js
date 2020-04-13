import React, {Component} from 'react';
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
    this.setState({list: [...list, toPush]})
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
      <Todo/>
    </div>
  );
}
}
export default App;
