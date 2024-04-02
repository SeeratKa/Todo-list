
import { useState } from "react";

const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
e.preventDefault();
if(!title||!desc){
    alert("title or description can not be blank")
}
    

    addTodo(title,desc);
}

  return (
    <div className="container">
        <h3 className="heading mx-5 mt-2">Add a todo</h3>
      <form onSubmit={submit}>
  <div className="mb-8 mx-5">
    <label htmlFor="title" className="form-label mt-3">Todo Title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    
  </div>
  <div className="mb-8 mx-5">
    <label htmlFor="desc" className="form-label mt-3">Todo Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>
  
  <button  type="submit" className="btn btn-sm btn-success mx-5 mt-3">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
