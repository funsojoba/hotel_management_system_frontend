import React from 'react'
import styled from 'styled-components'
import Logo from '../logo'
import Icon from './ft-icon'


const AboutWrapper = styled.div`
    flex:1;
    padding:10px;
`

const IconWrapper = styled.div`
    display: flex;
    margin-top: 15px;
`
const Paragraph = styled.p`
    margin-top:15px;
    color:#fff;
`

const FtAbout = () => {
    return <AboutWrapper>
        <Logo />
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab eius quaerat rem maiores iusto dolorem asperiores repellat, nemo perferendis officiis odio error vel provident hic possimus obcaecati, alias modi?</Paragraph>

        <IconWrapper>
            <Icon background="#272EAE" ><i className="fab fa-facebook"></i></Icon>

            <Icon background="#1590D8" ><i className="fab fa-twitter"></i></Icon>

            <Icon background="#D0021B" ><i className="fab fa-youtube"></i></Icon>

            <Icon background="#272EAE" ><i className="fab fa-facebook"></i></Icon>
        </IconWrapper>
    </AboutWrapper>
}


export default FtAbout