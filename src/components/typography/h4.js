import React from 'react'
import styled from 'styled-components'

const H4Style = styled.h4`
    font-size:${props => props.fontSize ? props.fontSize : '2rem'};
    font-family: 'Montserrat', sans-serif;
    color:${props => props.color ? props.color : "#000"};
    z-index: 10;
    text-align:${props => props.textAlign ? props.textAlign : 'center'};
    @media only screen and (max-width:850px){
        font-size: 1rem;
    }
`


const H4 = ({ children, textAlign, fontSize, }) => {
    return <H4Style
        textAlign={textAlign}
        fontSize={fontSize}
    >
        {children}</H4Style>
}

export default H4