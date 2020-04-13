import React from 'react';
import './App.css';
import Todo from './Components/List'
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
 
  return (
    <div className="App">
      <NewTask/>
      <List tasks={this.state.tasks} />
      <Todo />
    </div>
  );
}
}
export default App;
