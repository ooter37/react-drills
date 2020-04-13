import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    tasks: ['data','test','yea']

  }
}
render() {
  const mappedTodo = this.state.tasks.map((elem, index) => {
    return (
      <div key={index}>{elem}</div>
    )
  })
  return (
    <div className="App">

      <List/>
    </div>
  );
}
}
export default App;
