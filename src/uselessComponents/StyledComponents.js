import React, { Fragment } from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton';
const StyledDiv = styled.div`
    width:90%;
    max-width: 40rem;
    margin: 2rem auto;
    // border: 1px solid auto;
    padding: 1rem
`;
export default function StyledComponents() {
        return (
            <Fragment>
            <StyledDiv>
                <p>Hey Booty Yo Whatsuppp???</p>
            </StyledDiv>
            <StyledButton>Touch Me</StyledButton>
            </Fragment>
        );
    }

