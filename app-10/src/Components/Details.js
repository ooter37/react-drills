import React from 'react'
import axios from 'axios'

export default class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.magicthegathering.io/v1/cards/${this.props.match.params.id}`).then(res => {
            this.setState({
                details: res.data.card
            })

        })
    }
    render() {
        console.log(this.state.details)
        return (
        <div>
            <h1>{this.state.details.name}</h1>
            <img src={this.state.details.imageUrl} alt="card"/>
            <span>Price: {this.state.details.cmc} CMC</span>
        </div>
        )
        }
}