import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mappedTasks = this.props.tasks.map((element, index) => {
        return <Todo key={index} task={element} />;
      });
    console.log(this.props.tasks)


//     if (this.props.tasks) {const mappedTodo = this.props.tasks.map((elem, index) => {
//       return <div key={index}>{elem}</div>;
//     });
// }
    return (
      <div>
        
      </div>
    );
  }
}
