import React, { Component, Fragment, useState } from 'react';
import StudentClass from "./student";
import FunctionalComponent from "./functionComponent";
import CustomApp from './customApp'
import GuestUser from './Guest'
import User from './User'
// import StudentFunction from "./student";

// let e1 = <h1>Hello This is the initial Component.</h1>;
// class App extends Component {
//     render(){
//         return <Fragment>
//             <h1>Hello This is the initial Component.</h1>;
//             <h1>Hello This is the Second Component.</h1>;
//         </Fragment>
//         // return <h1>Hello This is the initial Component.</h1>;
//     }
// }

const App = () => {
    const [Logged,setStatus] = useState(false);
    const isLoggedIn = Logged;
    const Login = () => {
        return setStatus(true);
    }
    const Logout = () => {
        return setStatus(false);
    }
    let consumer;
    if(isLoggedIn)
     consumer =  <User clickData={Logout}/>
    else{
        const arr = ["gagan","aman","devanshu","karan"];
     consumer = <GuestUser clickData={Login} list={arr}/>
    }
    return (<div>{consumer}</div>);
    }
export default App;

{/* <Fragment> */}
    {/* <StudentClass name="Aman" roll={1} /> */}
    {/* <StudentFunction name="Aman" roll={1}/> */}
    {/* <Student name="Deepak" roll={2}/>
    <Student name="Mohile" roll={3}/>
    <Student name="Alok" roll={4}/>  */}
    {/* <FunctionalComponent name="Gagan" /> */}
    {/* <CustomApp /> */}
    {/* </Fragment> */}