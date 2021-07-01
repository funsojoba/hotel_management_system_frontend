import React from 'react'
import styled from 'styled-components'


const ImageWrapper = styled.div`
    width: 100%;
    height: 70%;
    background: url(${props => props.background ? props.background : "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"});
    background-size: cover;
    background-position: center;
`



const CardImage = ({background})=>{
    return <ImageWrapper
        background={background}
    ></ImageWrapper>
}
export default CardImage