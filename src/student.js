import React,{Component} from "react";
// import "./App.css";
import pt from "prop-types";
// Using Class Component  

class StudentClass extends Component{
    // state inside constructor
    constructor(props){
        super(props);
        this.state = {
            hobbie:"Swimming",
            name: this.props.name,
            roll: this.props.roll,
            id:100
        }
    }

    // state outside constructor
    // state = {
    //     hobbie : "Swimming"
    // }
    handleClick = (id,e) => {
        // alert("You Clicked a BUTTON inside a Class Component.");
         console.log("Button got clicked ",this); 
        this.setState({name:"Gagan",roll:"2"});
        console.log(id);
        console.log(e);
        }
    render(){
        return(
             <div className="bg">
            <h1>This is {this.state.name} and the roll number is {this.state.roll} and hobbie is {this.state.hobbie}.</h1>
            
            {/* this is  for when we create the class Component */}
            {/* <button onClick = {this.handleClick} className = "button">Click Me</button> */}
            <br/>
            <button onClick = { e => { this.handleClick(this.state.id,e); } } className = "button">Click To Change using Class Component</button>

            

        </div>
        );
    }
}
StudentClass.propTypes = {
    name : pt.string.isRequired,
    roll : pt.number.isRequired
}


// Using the Functional Component

const StudentFunction = (props) => { 
    const handleClick = () => {
        alert("You clicked a BUTTON inside a Function Component.");
        console.log("Button got clicked inside the functional component.");
    }
    return (
        <div>
    <h1 >This is {props.name} and the roll number is {props.roll}.</h1>
    <button onClick={handleClick} className="button">Click Me</button>
    </div>
);
}





export default StudentClass;
// export default StudentFunction;
