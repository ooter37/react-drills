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

    this.setState({
      pokemon: res.data.results
    })
  })
}
render(){
  
  console.log(this.state.pokemon)
  return (
    <div className="App">

    </div>
  );
  }
}
