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
    this.setState({
      list: [...this.state.list, this.state.text],
      text: ''
    })
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const mappedTodo = this.state.list.map(elem => {
      return (
      <div>{elem.index()}</div>
      )
    })
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
      <Todo mappedTodo={mappedTodo}/>
    </div>
  );
}
}
export default App;
