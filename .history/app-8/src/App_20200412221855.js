import React from 'react';
import './App.css';
import axios from 'axios'

export default class App extends React.Component {
constructor() {
  super()
  this.state = {
    pokemon: {}
  }
}
componentDidMount() {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(res => {
    console.log(res)
    console.log(res.data.results)
    this.setState({
      pokemon: res.data.results
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
