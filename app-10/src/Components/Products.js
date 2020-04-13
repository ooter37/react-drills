import React from 'react'
import axios from 'axios'
import {HashRouter, Link} from 'react-router-dom'

export default class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('https://api.magicthegathering.io/v1/cards').then(res => {
            this.setState({
                products: res.data.cards
            })
        })
    }
    render() {
        const mappedPokemon = this.state.products.map((elem,index) => {
            return(
                <div key={elem.id}>

                <HashRouter>
                    <Link to={`/details/${elem.id}`}><div key={index}>{elem.name}</div></Link>
                </HashRouter>
                </div>
            )
        })
        return(
            <div>
                {mappedPokemon}
            </div>
        )
    }
}