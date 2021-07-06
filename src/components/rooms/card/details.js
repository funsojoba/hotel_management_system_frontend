import React from 'react'
import styled from 'styled-components'

import Rating from './rating'
import MyLink from '../../forms/myLink'
import CardLink from './cardLink'

const DetailWrapper = styled.div`
    height: 30%;
    padding:10px;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const TextWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;
`

const Detail = ({roomName, href, rating})=>{
    return(
        <DetailWrapper>
            <TextWrapper>
                <h3>
                    {roomName}
                </h3>
                <Rating rating={rating}/>
            </TextWrapper>

            <CardLink href={href}>Book Room</CardLink>
        </DetailWrapper>
    )
}

export default Detail


