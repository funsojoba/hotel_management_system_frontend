import React from 'react'
import styled from 'styled-components'

import CardImage from './cardImage'
import Detail from './details'

const CardWrapper = styled.div`
    width:250px;
    height: 300px;
    border-radius: 30px;
    overflow: hidden;
    background:#fff;
    transition:all 300ms ease;
    &:hover{
        transform: translateY(-5px);
        box-shadow:0 5px 30px rgba(0,0,0,.2)
    }
`


const Card = ({roomName, rating})=>{
    return (<CardWrapper>
        <CardImage />
        <Detail roomName={roomName} rating={rating}/>
    </CardWrapper>)
}

export default Card
