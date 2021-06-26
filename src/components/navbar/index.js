import React from 'react'
import styled from 'styled-components'

import NavImage from './navImage'
import NavLinks from './navLink'


const NavStyle = styled.div`
    width:100%;
    padding:20px;
    display:flex;
    justify-content: space-between;
    position: absolute;
    top:10px;
    z-index:10;
`

const NavBar = ()=>{
    return(
        <NavStyle>
            <NavImage></NavImage>
            <NavLinks></NavLinks>
        </NavStyle>
    )
}

export default NavBar