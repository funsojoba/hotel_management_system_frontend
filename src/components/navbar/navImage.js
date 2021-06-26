import React from 'react'
import styled from 'styled-components'



const Image = styled.img`
    width: 100%;
`

const NavImg = styled.a`
    display: inline-block;
    width:150px;

`

const NavImage = ()=>{
    return <NavImg href="/">
        <Image src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1624670217/Logo_usjyn5.png" alt="Regium Hotels and Suites" ></Image>
            </NavImg>
}

export default NavImage