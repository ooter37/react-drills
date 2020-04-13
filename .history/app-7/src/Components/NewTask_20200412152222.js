import React from 'react' 

export default class NewTask extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    changeHandler(e) {
        this.setState({
            input: e.target.value
        })
    }
    render() {
    return (
        <div>
            <input
            type='text'
            onChange={e => this.changeHandler(e)}
            ></input>
        </div>
    )
}
}