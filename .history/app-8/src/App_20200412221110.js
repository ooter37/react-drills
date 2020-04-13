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
    this.setState({
      pokemon: res.data
    })
  })
  console.log(this.state.pokemon)
}
  render(){
  return (
    <div className="App">

    </div>
  );
  }
}
