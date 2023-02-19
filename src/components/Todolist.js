import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useEffect } from "react";
import {TiTick} from "react-icons/ti";

export default function Todolist(props) {
  //console.log("Datatype is",props.dataType,props.todos);
  //console.log(props.todos.map((todo)=>(todo.id)));
  useEffect(() => {
    props.todos.map((todo) => {
      console.log(
        "Timediff",
        Math.abs(new Date().getTime() - todo.id.getTime() / 1000)
      );
      console.log("System Time=",new Date().getTime(), "Todo Time=", todo.id.getTime());
      if (todo.type==="Pending" && (Math.floor((new Date().getTime() - todo.id.getTime()) / 1000) > 3)) {
        todo.type = "Overdue";
      }
    });
  }, [props]);

  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  // });

  return props.todos
    .filter((todo) => {
      console.log(props.dataType,todo.type);
      return todo.type === props.dataType;
    })
    .map((todo) => (
      <div className="icons" key={todo.id} style={{ fontSize: "40px" }}>
        {todo.text}
        <TiTick className="Tick-icon"
          onClick={() => props.completed(todo.id)}
        />
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => props.removeTodo(todo.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => props.editTodo(todo.id)}
        />
        
        
      </div>
    ));
}
