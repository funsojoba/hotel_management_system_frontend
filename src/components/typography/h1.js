import React from 'react'
import styled from 'styled-components'

const H1Style = styled.h1`
    font-size:${props => props.fontSize ? props.fontSize : '4rem'};
    font-weight: ${props => props.light ? '400' : '900'};
    font-family: 'Montserrat', sans-serif;
    color:${props => props.color ? props.color:"#000"};
    z-index: 10;
    text-align:${props => props.textAlign ? props.textAlign : 'center' };
    @media only screen and (max-width:850px){
        font-size: 2rem;
    }
`


const H1 = ({ children, textAlign, weight, fontSize,  }) => {
    return <H1Style
        textAlign={textAlign} 
        light={weight} 
        fontSize={fontSize}
        >
        {children}</H1Style>
}

export default H1