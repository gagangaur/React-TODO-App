import React,{useState} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavbarComponent/Navbar";
export default function Form() {
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[mobile,setMobile] = useState("");
    const handleName = (event) => {setName(event.target.value);}

    const handlePassword = (event) => {setPassword(event.target.value);}

    const handleChange = (event) => {console.log(event.target.value);
        if(event.target.name==="name")
        setName(event.target.value);
        if(event.target.name==="password")
        setPassword(event.target.value);
        if(event.target.name==="mobile")
        setMobile(event.target.value.substr(0,10));
    }

    return (
        <div>
            <NavBar />
            <form action="">
                <label htmlFor="name">Name: 
                <input type="text" value={name} onChange={(event)=>{setName(event.target.name.value)}} name="name" placeholder="enter name"/> </label>
                <br/>
                <label htmlFor="password">Password: 
                <input type="text" value={password} onChange={(event)=>{setName(event.target.name.value)}} name="password" placeholder="enter password"/></label>
                <br/>
                <label htmlFor="password">Mobile: 
                <input type="text" value={mobile} onChange={(event)=>{setName(event.target.name.value)}} name="mobile" placeholder="enter mobile number"/></label>
                <br/>
            </form>
        </div>
    )
}
