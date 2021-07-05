import React from 'react'


import Banner from '../../components/hero/banner'
import Card from '../../components/rooms/card'
import SearchBar from '../../components/searchBar'

const Rooms = ()=>(
    <>
        <Banner
            title="Welcome to the world of comfort"
            titleAlign="left"
           ></Banner>
        <SearchBar />
        <Card />
    </>
)

export default Rooms