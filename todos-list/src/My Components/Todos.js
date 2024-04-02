import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let mystyle={
    minHeight:"50vh"
  }
  return (
    <div className="container mt-3" style={mystyle}>
      <h3 className="mx-5">Todos list</h3>
      <div className="mx-5">
        {props.todos.length === 0 ? 
          "No todos to display" :
          props.todos.map((todo) => (
            <React.Fragment key={todo.sno}>
             
              <TodoItem todo={todo} onDelete={props.onDelete} />
              {props.todos.length > 0 && <hr />}
          
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default Todos;


