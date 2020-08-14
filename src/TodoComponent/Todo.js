import React from "react";
import "./App.css";
import { Fragment } from "react";
import { Form } from "react-bootstrap";

export default function Todo(props) {
  const { id, todo: task, isDone } = props.items;

  // responsible for styling todo  when a todo is checked
  const getStyle = () => {
    return {
      cursor: "pointer",
      textDecoration: isDone ? "line-through" : "none"
    };
  };

  return (
    <Fragment>
      <div
        className="alert  alert-dismissible fade show alertBox w-75 mx-auto shadow-lg todo-color"
        role="alert"
      >
        <div 
          key={id} 
          onClick={() => props.markComplete(id)}
        >
          <Form.Check
            className="trigger"
            custom
            onChange={() => {}}
            checked={isDone}
            id={id}
            type={"checkbox"}
            label={
              <strong className="ml-3" style={getStyle()}>
                {task}
              </strong>
            }
            onClick={() => props.markComplete(id)}
          />
        </div>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => props.delTodo(id)}
          style={{ cursor: "pointer" }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </Fragment>
  );
}
