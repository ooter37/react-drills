import React from 'react' 

export default class NewTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }
    changeHandler(e) {
        this.setState({
            input: e.target.value
        })
    }

    this.props.addTask() {

    }


    render() {
    return (
        <div>
            <input
            type='text'
            onChange={e => this.changeHandler(e)}
            ></input>
            <button
            onChange={}
            >
                Add Task
            </button>
        </div>
    )
}
}