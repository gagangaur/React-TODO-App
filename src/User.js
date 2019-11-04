import React, {Fragment} from 'react'
import StyledButton from './StyledButton';

const User = (props) => {
    return(
        <Fragment>
        <h1>Welcome User.</h1>
       <StyledButton onClick = {props.clickData}>Logout</StyledButton>
        </Fragment>
    );
}

export default User;