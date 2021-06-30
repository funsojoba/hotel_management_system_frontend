import React from 'react'
import styled from 'styled-components'

import GlassBtn from './glassBtn'
import GlassInput from './glassInput'
import H1 from '../typography/h1'


const FormContainerDiv = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:10px;
    justify-content: flex-end;
`

const FormContainer = ({title, inputType})=>{
    return <FormContainerDiv>
            <H1 fontSize="1.4em" textAlign="left">{title}</H1>
            <GlassInput type={inputType}></GlassInput>
    </FormContainerDiv>
}

export default FormContainer