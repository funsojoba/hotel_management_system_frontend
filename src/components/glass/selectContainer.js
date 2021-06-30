import React from 'react'
import styled from 'styled-components'
import GlassSelect from './glassSelect'

import GlassBtn from './glassBtn'
import GlassInput from './glassInput'
import H1 from '../typography/h1'


const FormContainerDiv = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
`

const SelectContainer = ({ title, inputType }) => {
    return <FormContainerDiv>
        <H1 fontSize="1.4em" textAlign="left">{title}</H1>
        <GlassSelect></GlassSelect>
    </FormContainerDiv >
}

export default SelectContainer