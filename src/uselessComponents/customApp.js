import React, { Fragment } from 'react'
import useCustomCounter from './Custom';
// import './App.css';

const CustomApp = () => {
    const data = useCustomCounter();
    
    // Code Reusablity 

    const data1 = useCustomCounter();

    return(
        <Fragment>
        <div className="customApp">
            <h1>This is Custom Hook Component.</h1>
            <h2> Counter value is : {data.count}</h2>
            <button onClick={data.handleIncrement} className="button">Increment</button>
        </div>
        <div className="customApp1">
        <h1>This is another Custom Hook Component.</h1>
        <h2> Counter value is : {data1.count}</h2>
        <button onClick={data1.handleIncrement} className="button">Increment</button>
    </div>
    </Fragment>
    );
}

export default CustomApp;