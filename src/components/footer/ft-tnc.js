import React from 'react'
import styled from 'styled-components'


const TnCWrapper = styled.div`
    flex:1
`

const LinkDiv = styled.a`
  font-family: 'Poppins', sans-serif;
    color:#fff;
    text-decoration: none;
    transition: all 300ms ease;
    display:block;
    padding:5px;
    &:hover{
        text-decoration: underline;
    }
`


const TnC = () => {
    return <TnCWrapper>
        <LinkDiv href="/">Terms and Conditions</LinkDiv>
        <LinkDiv href="/">FAQs</LinkDiv>
    </TnCWrapper>
}


export default TnC