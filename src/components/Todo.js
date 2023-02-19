import React from "react";
import { useState,useEffect } from "react";
import Todolist from "./Todolist";

export default function Todo(props) {

  
// console.log(props.dataType);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    if(edit){
     setInput(edit.text)
    }
    else{
    setInput("");
    }
 },[setInput,edit])

  const editTodo = (id) => {
    console.log("edit calling");
    const findTodo=todos.find((todo)=>todo.id===id);
    setEdit(findTodo);
  };

  const updateTodo =(id, type, text)=>{
    const newTodo=todos.map((todo)=>
      todo.id===id ? {id, type, text} : todo
    )
    setTodos(newTodo);
    setEdit(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!edit){
      addTodo({
        id: new Date(),
        type: "Pending",
        text: input,
      });
      setInput("");
    }
    else{
      updateTodo(edit.id, edit.type, input )
    }
    
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo,...todos);
    // console.log("Add Todo Calling");
  };

  const handleOnchange = (e) => {
    setInput(e.target.value);
  };

  const removeTodo = (id) => {
    console.log("Remove calling");
    console.log("Before removing todos", todos);
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    console.log("Remove Array is", removeArr);
    setTodos(removeArr);
  };


  const completed = (id) => {
    console.log("Completed calling");
   todos.map((todo) => { 
    if(todo.id ===id){
      todo.type="Completed";
    }
   }
   );
    setTodos(todos);
  };
  

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add Item"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleOnchange}
        ></input>
        <button className="todo-button" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
      <Todolist
        todos={todos}
        removeTodo={removeTodo}
        completed={completed}
        editTodo={editTodo}
        dataType={props.dataType}
      />
    </div>
  );
}
