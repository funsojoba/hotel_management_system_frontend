import React from 'react'
import styled from 'styled-components'


const GlassBtnStyle = styled.button`
    background:#051D40;
    border-radius: 20px;
    padding:30px;
    cursor: pointer;
    border:none;
    transition:300ms;
    color:#FFDA7C;
    border:solid 1px #051D40;
    &:hover{
        background:#fff;
        color:#051D40;
    }
`

const GlassBtn = () => {
    return (<GlassBtnStyle>
        Check Rooms
    </GlassBtnStyle>)
}

export default GlassBtn