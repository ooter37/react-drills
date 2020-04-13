import React from "react";

export default class List extends React.Component {
  render() {
    const mappedTodo = this.state.tasks.map((elem, index) => {
      return <div key={index}>{elem}</div>;
    });
    return <div className="App">
        <div>
            {mappedTodo}
        </div>
    </div>;
  }
}
