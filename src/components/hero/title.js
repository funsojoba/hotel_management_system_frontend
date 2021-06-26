import React from 'react'
import styled from 'styled-components'


const H1 = styled.h1`
    font-size:4rem;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    z-index: 10;
    text-align:${props => props.textAlign ? props.textAlign : 'center' };

    @media only screen and (max-width:850px){
        font-size: 2rem;
    }
`

const Title = ({ children, textAlign})=>{
    return <H1 textAlign={textAlign}>{children}</H1>
}

export default Title