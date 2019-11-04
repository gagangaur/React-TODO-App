import React, {Fragment, useState} from 'react';
import Content from './Content';
import "./App.css";
import Bootstrap from './Bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
export default function App(){
    const[count,setCount] = useState(0);
    const[isColored,setColor] = useState(false);
    const incrementCounter = () => {setCount(count+1); } 
    const decrementCounter = () => {setCount(count-1); } 
    const changeColorToBlue = () => {setColor(true);}
    const changeColorToGreen = () => {setColor(false);}
    return (
    <Fragment>
    <Content Counter={count} Color={isColored ? "changeToBlue" : "changeToGreen"}/>
    <button className="btn btn-dark p-2 mr-2" onClick={incrementCounter}>Increment</button>
    <button className="btn btn-dark p-2 mr-2" onClick={decrementCounter}>Decrement</button>
    <button className="btn btn-dark p-2 mr-2" onClick={changeColorToBlue}>ChangeColorToBlue</button>
    <button className="btn btn-dark p-2 mr-2" onClick={changeColorToGreen}>ChangeColorToGreen</button>
    <h1>This is BootStrap.</h1>
    <Bootstrap />
    </Fragment>
    );
}
