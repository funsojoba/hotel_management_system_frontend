import React from 'react'
import styled from 'styled-components'


const BigBtnStyle = styled.button`
    padding:15px 25px;
    background:#0A4073;
    color: #FFDA7C;
    letter-spacing: 1.2px;
    box-shadow: 0px 5px 30px rgba(10,64,115,.26);

`

const BigBtn = ({onClick, type, children})=>{
    return <BigBtnStyle onClick={onClick} type={type}>
        {children}
    </BigBtnStyle>
}

export default BigBtn