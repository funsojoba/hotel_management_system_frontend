import React from 'react'
import styled from 'styled-components'


const Pstyle = styled.p`
    font-size:${props => props.fontSize ? props.fontSize : '2rem'};
    font-family: 'Montserrat', sans-serif;
    color:${props => props.color ? props.color : "#fff"};
    text-align:${props => props.textAlign ? props.textAlign : 'center'};

    @media only screen and (max-width:850px){
        font-size: 2rem;
    }
`

const P = ({ children, textAlign, color, fontSize }) => {
    return <Pstyle 
        textAlign={textAlign}
        color={color}
        fontSize={fontSize}
        >{children}</Pstyle>
}

export default P