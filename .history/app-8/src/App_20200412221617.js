import React from 'react';
import './App.css';
import axios from 'axios'

export default class App extends React.Component {
constructor() {
  super()
  this.state = {
    pokemon: []
  }
}
componentDidMount() {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(res => {
    console.log(res)
    console.log(res.data)
    this.setState({
      pokemon: res.data.results
    })
  })

}
  render(){
  return (
    <div className="App">

    </div>
  );
  }
}
