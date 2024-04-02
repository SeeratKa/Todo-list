import './App.css';
import Header from './My Components/Header';
import AddTodo from './My Components/AddTodo';
import Footer from './My Components/Footer';
import Todos from './My Components/Todos';
import { useState, useEffect } from "react";

function App() {
  // Retrieving todos from local storage or initializing an empty array
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

 

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);

    // Updating todos state using setTodos
    setTodos(todos.filter((e) => e !== todo));
  
    //localStorage.setItem("todos", JSON.stringify(todos));
  };
 
  const addTodo = (title, desc) => {
    if (title.trim() !== "" && desc.trim() !== "") {
      const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
      const newTodo = { sno, title, desc };
      setTodos([...todos, newTodo]);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

