import React from 'react'
import Banner from '../../components/hero/banner'
import Glass from '../../components/glass'

import styled from 'styled-components';
import Footer from '../../components/footer';

const GlassWrapper = styled.div`
        margin-top: -50px;
        display:flex;
`


const Home = () => {
    return <>
        <Banner
            title="Welcome to Royalty"
            description="Welcome to Regium Hotel and Suite,
                the Kingdom of hostpitality"
            background="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <GlassWrapper>
            <Glass />
        </GlassWrapper>
        <Footer />
    </>
}

export default Home