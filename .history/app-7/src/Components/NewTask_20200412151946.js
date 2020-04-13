import React from 'react' 

export default class NewTask extends React.Component() {
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