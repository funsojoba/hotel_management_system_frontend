import React from 'react'
import styled from 'styled-components'

import H1 from '../typography/h1'

const formDiv = styled.div`

`

const InputDiv = styled.input`
    padding:10px;
    border: none;
    background:none;

`

const GlassInput = ({type})=>{
    return <>
        <InputDiv type={type}/>
        </>
}

export default GlassInput