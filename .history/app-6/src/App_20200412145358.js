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
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState({list: [...this.state.list, this.state.text]})
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
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
