import React from 'react'
import styled from 'styled-components'


const IconStyle = styled.div`
    width: 30px;
    height: 30px;
    background:${props => props.background ? props.background : "#fff"};
    border-radius:50%;
    margin:10px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor: pointer;
`

const Icon = ({background, children})=>{
    return <IconStyle background={background}>
        {children}
    </IconStyle>
}

export default Icon