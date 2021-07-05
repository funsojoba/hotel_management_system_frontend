import React from 'react'
import styled from 'styled-components'


import Banner from '../../components/hero/banner'
import Card from '../../components/rooms/card'
import SearchBar from '../../components/searchBar'
import Footer from '../../components/footer'


const CardWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding:50px;
    flex-wrap: wrap;

    @media only screen and (max-width:850px){
        padding:50px
    }
`


const Rooms = ()=>(
    <>
        <Banner
            title="Welcome to the world of comfort"
            titleAlign="left"
           ></Banner>
        <SearchBar />
        
        <CardWrapper>
            <Card />
        </CardWrapper>

        <Footer />
    </>
)

export default Rooms