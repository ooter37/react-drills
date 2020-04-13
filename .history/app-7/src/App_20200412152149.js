import React from 'react';
import './App.css';
import List from './Components/List'
import NewTask from './Components/NewTask'

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
      <NewTask/>
      <List mappedTodo={mappedTodo}/>
    </div>
  );
}
}
export default App;
