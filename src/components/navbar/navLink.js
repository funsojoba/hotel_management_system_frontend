import React from 'react'
import styled from 'styled-components'


const StyledLink = styled.a`
    display:inline-block;
    padding:5px 10px;
    color:#fff;
    text-decoration:none;
    transition: all 100ms ease-in;
    font-family: 'Poppins', sans-serif;

    &:hover{
        transform: scale(1.1);
    }

`

const ULStyle = styled.div`
    display: flex;
`

const BarsStyle = styled.div`
    width:60px;
    height: 60px;
    border-radius: 50%;
    background:#fff;
    border:solid 1px #979797;
    display: none;
    justify-content: center;
    align-items: center;
    color:#979797;
    cursor: pointer;
    transition: all 100ms ease-in;

    &:hover{
        transform: scale(1.1);
    }
`



const NavLinks = () => {
    return (
        <div>
            <BarsStyle>
                <i class="fas fa-bars fa-2x"></i>
            </BarsStyle>
            <ULStyle>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/rooms">Rooms</StyledLink>
                <StyledLink href="/account">Account</StyledLink>
            </ULStyle>
        </div>
    )
}

export default NavLinks