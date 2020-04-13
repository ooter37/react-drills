import React from "react";
import "./App.css";
import List from "./Components/List";
import NewTask from "./Components/NewTask";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  render() {
    return (
      <div className="App">
        <NewTask addTask={this.addTask} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
