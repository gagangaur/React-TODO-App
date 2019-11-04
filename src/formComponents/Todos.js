import React from 'react'
import Todo from './Todo'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function Todos(props) {
    let somanytodos = "";
    try{
    for(let key in props){
    somanytodos = props[key].map(item => {return <Todo key={item.id} items={item} markComplete={props.markComplete} delTodo={props.delTodo}/>});
    }
    }
    catch(e){
   
    }
    return (
        <div className="p-3 container justify-content-center">
            {somanytodos}
        </div>
    )
}
