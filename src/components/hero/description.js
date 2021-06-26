import React from 'react'
import styled from 'styled-components'


const PWrapper = styled.div`
    width:${props => props.width ? props.width : '60%'};

    @media only screen and (max-width:850px){
        width:100%
    }
`

const PStyle = styled.p`
    font-size:2rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    text-align:${props => props.textAlgin ? props.textAlign : 'center'};

    @media only screen and (max-width:850px){
        font-size: 1.2rem;
    }
`

const Desc = ({ children }) => {
    return <PWrapper>
                <PStyle>{children}</PStyle>
        </PWrapper>
}


export default Desc