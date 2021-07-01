import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const H5Div = styled.h4`
    margin-bottom: 20px;
    color:#fff;
    font-family: 'Poppins', sans-serif;
`

const ContactWrapper = styled.div`
    flex:1;
    padding:10px;
`

const Paragraph = styled.p`
    color:#fff;
    line-height: 1.4em;
`


const FtContact = () => {
    return <ContactWrapper>
        <H5Div>Contact Us</H5Div>
        <Paragraph>
            (+55) 254. 254. 254 <br></br>
            Info@lsemajafrica.com
            Helios Tower 75 Tam Trinh Hoang Mai - Ha Noi - Viet Nam
        </Paragraph>


    </ContactWrapper>
}


export default FtContact