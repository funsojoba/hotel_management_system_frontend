import React from 'react'
import styled from 'styled-components'

import Desc from './description'
import Title from './title'
import NavBar from '../navbar'


const BannerStyle = styled.div`
    padding: 50px;
    position:relative;
    border-radius: 50px;
    height: 600px;
    overflow: hidden;
    background:rgba(0,0,0,.7);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    &:after {
        content: "";
        background: url(${props => props.background ? props.background : "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"});
        background-size: cover;
        background-position: center;
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        z-index:-1;
}
`

const Banner = () => {
    return (
    <BannerStyle
            background="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    >
        <NavBar/>

        <Title>
            Welcome to Royalty
        </Title>
        <Desc>
            Welcome to Regium Hotel and Suite,
            the Kingdom of hospitality
        </Desc>
    </BannerStyle>)
}

export default Banner