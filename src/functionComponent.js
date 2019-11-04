import React, { useState, Fragment, useEffect } from 'react';
// import "./App.css";
import useCustomCounter from './Custom'
// import Function_Component from './functionComponent';

export default function Function_Component(props){
    const [name, setName] = useState(props.name);
    const [count,incrementCounter] = useState(0);

    const handleClickEvent = () => {
        setName("Rohit");
        console.log("The button is clicked inside the functional Component made by the arrow function");
        }

    const updateCounter = () => { incrementCounter(count+1); }

    useEffect(() => {
        console.log("Use Effect Called");
    })
    return (
    <div className="bgg">
        <h1>This is the functional Component made by arrow Function </h1>
        {/* <h1> My name is {props.name} and my roll number is {props.roll}</h1> */}
        <h1> This is the state value {name}</h1>
        <button onClick={handleClickEvent} className="button">Click To Change using Function Component</button>
        <br/><br/>
        <h1> You incremented the counter {count} times.</h1>
        <button onClick={updateCounter} className="button">Click to Increment using Function Component</button>

    </div> ); 
}
