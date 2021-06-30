import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavWrapper = styled.div`
    position: relative;
`

const StyledLink = styled.span`
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
    transition: all 300ms ease-in;

    @media only screen and (max-width:850px){
        display:${props => props.active ? 'flex' : 'none'};
        flex-direction: column;
        text-align:right;
        transition: all 300ms ease-in;
        margin-top: 50px;
    }
`

const BarsStyle = styled.div`
    width:50px;
    height: 50px;
    border-radius: 50%;
    border:solid 2px #fff;
    display: none;
    justify-content: center;
    align-items: center;
    color:#eee;
    cursor: pointer;
    transition: all 100ms ease-in;
    position: absolute;
    right: 10px;

    &:hover{
        transform: scale(1.1);
    }

    @media only screen and (max-width:850px){
        display:flex;
    }
`



const NavLinks = () => {

    const [active, setActive] = useState(false)

    const handleToggle = ()=>{
        setActive(!active)
    }

    return (
        <NavWrapper>
            <BarsStyle onClick={handleToggle}>
                <i class="fas fa-bars fa-lg"></i>
            </BarsStyle>
            <ULStyle active={active}>
                <StyledLink> <Link to="/">Home</Link> </StyledLink>
                <StyledLink> <Link to="/rooms">Rooms</Link></StyledLink>
                <StyledLink> <Link to="/account">Account</Link></StyledLink>
            </ULStyle>
        </NavWrapper>
    )
}

export default NavLinks