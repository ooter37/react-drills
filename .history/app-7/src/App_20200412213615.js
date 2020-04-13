import React from 'react';
import './App.css';
import Todo from './Components/List'
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    tasks: ['data','test','yea'],
    bigTest: ['this1', 'test2', 'array3']

  }
  this.addTask = this.addTask.bind(this)
}

addTask(task) {
  this.setState({
    tasks: [...this.state.tasks, task]
  })
}


render() {
 
  return (
    <div className="App">
      {/* <NewTask addTask={this.addTask}/> */}
      <List 
      tasks={this.state.tasks}
      bigTest={this.state.bigTest}
      />
      {/* <Todo /> */}
    </div>
  );
}
}
export default App;
