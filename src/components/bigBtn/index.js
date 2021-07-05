import React from 'react'
import styled from 'styled-components'


const BigBtnStyle = styled.button`
    padding:15px 35px;
    background:#0A4073;
    color: #FFDA7C;
    letter-spacing: 1.2px;
    box-shadow: 0px 5px 30px rgba(10,64,115,.26);
    border:none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 300ms ease;
    width: ${props =>props.width ? props.width : "auto"};
    
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0px 10px 30px rgba(10,64,115,.56);
    }

`

const BigBtn = ({onClick, type, children, width})=>{
    return <BigBtnStyle 
                onClick={onClick} 
                type={type}
                width={width}
                >
        {children}
    </BigBtnStyle>
}

export default BigBtn