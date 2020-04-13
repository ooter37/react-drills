import React from "react";
import Todo from './Todo'

export default class List extends React.Component {
  render() {
const mappedTodo = this.props.tasks.map((elem, index) => {
      return <div key={index}>{elem}</div>;
    });

    return (
      <div>
        <Todo mappedTodo={mappedTodo}/>
      </div>
    );
  }
}
