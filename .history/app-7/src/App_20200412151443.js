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
  return (
    <div className="App">

    </div>
    <List/>
  );
}
}
export default App;
