import React from 'react'
import styled from 'styled-components'


const formDiv = styled.div`

`

const InputDiv = styled.select`
    border:none;
    padding: 10px;
    background:none;
`

const GlassSelect = () => {
    return <>
        <InputDiv>
            <option>Delux</option>
            <option>Luxury</option>
            <option>Single</option>
            <option>Double</option>
            <option>Classic</option>
        </InputDiv>
    </>
}

export default GlassSelect