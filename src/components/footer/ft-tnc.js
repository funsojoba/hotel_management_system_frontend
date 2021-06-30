import React from 'react'
import styled from 'styled-components'
import Logo from '../logo'
import Icon from './ft-icon'


const TnCWrapper = styled.div`
    flex:1
`

const LinkDiv = styled.a`
    color:#fff;
    text-decoration: none;
    transition: all 300ms ease;
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