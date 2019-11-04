import React, { Fragment, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button,Container,Row,Col,Alert } from "react-bootstrap";
import Todos from './Todos';
import uuid from 'uuidv4';


export default function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos,updateTodosList] = useState([]);
  const [showAlert,changeAlertState] = useState(false);
  const handleEvent = event => {
    setTodoValue(event.target.value);
    if(showAlert===true){
      changeAlertState(false);
    }
  };

  const handleButtonClick = () => {
    if (todoValue !== "") {
      const newItem = {
          id: uuid(),
          todo: todoValue,
          isDone: false
      }
      todos.push(newItem);
      updateTodosList(todos);
      setTodoValue("");
    } else {
      changeAlertState(true);
    }
  };
  const markComplete = (id) => {
      const updatedTodo = todos.map(item => {
        if(item.id===id){
          item.isDone=!item.isDone;
        }
        return item;
      });
      updateTodosList(updatedTodo);
}
const delTodo = (id) => {
  updateTodosList([...todos.filter(todo => {
    return todo.id!==id;
  })])
}
  return (
    <Fragment>
      <Container className="mt-3 p-3 ">
        <h2 className=" p-3 text-center header-color text-white shadow-lg ">
          ToDo App
        </h2>
    
      <Row className="p-2 mt-3 mx-auto">
        <Col xs={12} sm={12} md={12} >
         <Alert variant="danger" className="fade show" show={showAlert} >Oopss!!! enter something...</Alert> </Col>
          <Col xs={12} sm={12} md={8} className="p-3 d-flex justify-content-center">
           
          <input
            className="  shadow form-control d-flex justify-content-center "
            type="text"
            value={todoValue}
            style={{ height: "50px" }}
            onChange={handleEvent}
            placeholder="Enter Something..."
          />
          </Col>
          <Col xs={12} sm={12} md={4} className="p-3 d-flex justify-content-center" >
          <Button
            className="addItem btn-lg w-75 shadow "
            variant="outline-warning"
            onClick={handleButtonClick}
          >
            Add Item
          </Button>
    
          </Col>

          </Row>
          </Container>
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo}/>

    </Fragment>
  );
}
