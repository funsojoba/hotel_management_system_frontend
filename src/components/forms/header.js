import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.h2`
    font-weight: lighter;
    text-align:center;
    padding:20px;
    letter-spacing: 5px;
`


const Header = ({children})=>{
    return(<HeaderStyle>
        {children}
    </HeaderStyle>)
}

export default Header