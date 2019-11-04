import React, {Fragment} from 'react'
import StyledButton from './StyledButton';

const GuestUser = (props) => {
    const arr = props.list;
    console.log(arr);
    const array = arr.map(item => {return(<li>{item}</li>)});
    const numarray = [10,20,30,40];
    console.log(array);
    return(
        <Fragment>
        <h1>Welcome GuestUser.</h1>
        <StyledButton onClick={props.clickData}>Login</StyledButton>
        <StyledButton>SignUp</StyledButton>
        <br></br>
        <br></br>
        <ul>
            {array}
        </ul>
        {/* <ul>
            {numarray.map(items => <li>{items*2}</li>)}
        </ul> */}
        </Fragment>
    );
}

export default GuestUser;