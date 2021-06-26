import React from 'react'
import styled from 'styled-components'


const RatingWrapper = styled.div`
    display: flex;
`

const Star = styled.div`
    color:#FFDA7C;
`

const Rating = ({rating})=>{
    return <RatingWrapper>
        <p>{rating}</p>
        <Star>
            <i class="fas fa-star"></i>
        </Star>
    </RatingWrapper>
}

export default Rating