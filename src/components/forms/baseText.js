import React from 'react'
import styled from 'styled-components'


const BaseTextStyle = styled.span`
    margin-top:30px;
    display: block;
    color:#979797;
`

const BaseText = ({children})=>{
    return <BaseTextStyle>
        {children}
    </BaseTextStyle>
}

export default BaseText