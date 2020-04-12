import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataArray: ['dog', 'cat', 'string', 'yes']
    }
  }

  render() {
  return (
    <div className="App">{this.state.dataArray.map((val,ind) => <div key={ind}>{val}</div>)}
    
    </div>
    
  );
}
}
export default App;
