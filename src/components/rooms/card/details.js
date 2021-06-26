import React from 'react'
import styled from 'styled-components'

import Button from '../../forms/button'
import Rating from './rating'

const DetailWrapper = styled.div`
    height: 25%;
    padding:10px;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const TextWrapper = styled.div`
    display:flex;
    justify-content: space-between;
`

const Detail = ({roomName, handleClick, rating})=>{
    return(
        <DetailWrapper>
            <TextWrapper>
                <h3>
                    {roomName}
                </h3>
                <Rating rating={rating}/>
            </TextWrapper>

            <Button handleClick={handleClick}>
                Book Room
            </Button>
        </DetailWrapper>
    )
}

export default Detail


