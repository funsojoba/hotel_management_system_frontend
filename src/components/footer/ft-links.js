import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const H5Div = styled.h4`
    margin-bottom: 20px;
    color:#fff;
`

const ContactWrapper = styled.div`
    flex:1
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

const FtLinks = () => {
    return <ContactWrapper>
        <H5Div>Quicklinks</H5Div>
        <>
            <StyledLink> <Link to="/">Home</Link> </StyledLink> <br></br>
            <StyledLink> <Link to="/rooms">Rooms</Link></StyledLink> <br></br>
            <StyledLink> <Link to="/about-us">About Us</Link></StyledLink> <br></br>
            <StyledLink> <Link to="/contact-us">Contact Us</Link></StyledLink>
        </>


    </ContactWrapper>
}


export default FtLinks