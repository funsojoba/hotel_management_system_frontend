import React from 'react'
import styled from 'styled-components'

import FtAbout from './ft-about'
import FtContact from './ft-contact'
import FtLinks from './ft-links'
import TnC from './ft-tnc'

const FooterDiv = styled.div`
    padding: 50px;
    background:#051D40;
    display: flex;
    flex-wrap: wrap;
    border-radius: 50px;

`

const Footer = ()=>{
    return <FooterDiv>
        <FtAbout />
        <FtContact />
        <FtLinks />
        <TnC />

    </FooterDiv>
}

export default Footer