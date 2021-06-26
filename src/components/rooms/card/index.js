import React from 'react'
import styled from 'styled-components'

import CardImage from './cardImage'
import Detail from './details'

const CardWrapper = styled.div`
    width:300px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    background:#fff
`


const Card = ()=>{
    return (<CardWrapper>
        <CardImage />
        <Detail roomName='Delux Testing' rating='4.98'/>
    </CardWrapper>)
}

export default Card
