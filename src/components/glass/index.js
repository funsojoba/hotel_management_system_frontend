import React from 'react'
import styled from 'styled-components'
import FormContainer from './formContainer'
import GlassBtn from './glassBtn'
import SelectContainer from './selectContainer'


const GlassStyle = styled.div`
    background:rgba(255, 255, 255, .7);
    padding:30px;
    z-index:10;
    width:90%;
    height: 150px;
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 5px 30px rgba(0,0,0,.2);
    backdrop-filter: blur(150px);
    display:flex;

    @media only screen and (max-width:856px){
        height:auto;
        flex-wrap: wrap;
        justify-content: center;
    }
`


const Glass = ()=>{
    return <GlassStyle>
        <FormContainer title="Check In" inputType="date"></FormContainer>    
        <FormContainer title="Check Out" inputType="date"></FormContainer>    
        <SelectContainer title="Room"></SelectContainer>
        <GlassBtn></GlassBtn>
    </GlassStyle>
}


export default Glass