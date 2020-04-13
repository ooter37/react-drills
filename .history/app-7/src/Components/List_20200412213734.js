import React from "react";

export default class List extends React.Component {
  render() {
    
    console.log(this.props.tasks)
    console.log(['this', 'test', 'array'])
    console.log(this.props.bigTest)

const mappedTodo = this.props.tasks.map((elem, index) => {
      return <div key={index}>{elem}</div>;
    });

    return (
      <div>
        {mappedTodo}
      </div>
    );
  }
}
