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
  this.addTask = this.addTask.bind(this)
}

addTask() {

}


render() {
 
  return (
    <div className="App">
      <NewTask addTask={this.addTask}/>
      <List tasks={this.state.tasks} />
      <Todo />
    </div>
  );
}
}
export default App;
