import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks)
    if (tasks) {const mappedTodo = tasks.map((elem, index) => {
      return <div key={index}>{elem}</div>;
    });
}
    return (
      <div className="App">
        <div>{mappedTodo}</div>
      </div>
    );
  }
}
