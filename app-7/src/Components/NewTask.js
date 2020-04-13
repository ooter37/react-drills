import React from "react";

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.inputClear = this.inputClear.bind(this);
  }
  changeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }
  inputClear() {
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.changeHandler(e)}
          value={this.state.input}
        ></input>
        <button
          onClick={() => {
            this.props.addTask(this.state.input);
            this.inputClear();
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}
