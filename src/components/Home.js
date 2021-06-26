import React from 'react'
import Banner from './hero/banner'
import Card from './rooms/card'


const HomePage = ()=>{
    return (
        <>
        <Banner
            title="Welcome to Royalty"
            description="Welcome to Regium Hotel and Suite,
                the Kingdom of hostpitality"
            background="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        ></Banner>

        <Card />
        </>
        
    )
}

export default HomePage