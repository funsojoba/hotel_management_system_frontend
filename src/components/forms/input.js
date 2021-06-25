import React from 'react'
import styled from 'styled-components'


const InputStyle = styled.input`
    border-radius: 50px;
    background:${props => props.white ? "#fff" : "#F8F8F8"};
    padding:15px 30px;
    border:none;
    outline:none;
    width: ${props => props.width ? props.width : '100%'};
    margin-bottom: 30px;
`

const Input =({handleChange, placeholder, type, background, value})=>{
    return <InputStyle 
                onChange={handleChange} 
                placeholder={placeholder}
                type={type}
                white={background}
                value={value}
            />
}

export default Input