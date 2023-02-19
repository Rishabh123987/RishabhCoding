import React from "react";
import Todo from "./Todo";

export default function Card(props) {
  return (
    <>
      <div className="card my-4" style={{ width: "40rem" }}>
        <div className="card-body">
          <h3>Add the Item to see </h3>
          <Todo dataType={props?.dataType}></Todo>
        </div>
      </div>
    </>
  );
}
