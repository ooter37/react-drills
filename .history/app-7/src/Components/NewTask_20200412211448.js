import React from "react";

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  changeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.changeHandler(e)}></input>
        <button
          onChange={() => {
            this.props.addTask(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}
