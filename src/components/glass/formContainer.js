import React from 'react'
import styled from 'styled-components'

import GlassInput from './glassInput'
import H4 from '../typography/h4'


const FormContainerDiv = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:10px;
    justify-content: flex-end;
    @media only screen and (max-width:650px){
        flex-direction: row;
        border-bottom: 1px solid #888;
        justify-content: space-between;
    }
`

const FormContainer = ({title, inputType})=>{
    return <FormContainerDiv>
            <H4 fontSize="1.4em" textAlign="left">{title}</H4>
            <GlassInput type={inputType}></GlassInput>
    </FormContainerDiv>
}

export default FormContainer