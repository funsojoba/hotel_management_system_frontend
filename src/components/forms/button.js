import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    border-radius: 50px;
    background:${props => props.bgDanger ? "#F53E6A" : "#051D40"};
    padding:15px 30px;
    color: ${props => props.clDanger ? "#fff" : "#FFDA7C"};
    border:none;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 100ms ease-in;
    width: ${props => props.width ? props.width : '100%'};

    &:hover{
        box-shadow: 0 5px 30px inherit;
        transform: translateY(-5px);
    }

`


const Button = ({children, primaryBackground, primaryColor, handleClick})=>{
    return <ButtonStyle onClick={handleClick} bgDanger={primaryBackground} clDanger={primaryColor}>
        {children}
    </ButtonStyle>
}

export default Button