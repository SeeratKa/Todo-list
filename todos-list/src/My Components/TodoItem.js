import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
  <h4 className="mx-2">{todo.title}</h4>
      <p className="mx-2">{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
