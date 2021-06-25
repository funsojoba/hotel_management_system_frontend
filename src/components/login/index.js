import React from 'react'
import Input from '../forms/input'
import Button from '../forms/button'
import styled from 'styled-components'

import BaseText from '../forms/baseText'
import Header from '../forms/header'


const Container = styled.main`
    height:100vh;
    background:#EDF5FF;
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width:60%;
    padding:50px;
    background:#fff;
    border-radius:50px;

    @media only screen and (max-width:650px){
        width:90%
    }
`

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color:#979797
`



const LoginForm = () => {
    return <Container>
        <Form>
            <Header>LOGIN</Header>
            <Label for="email">Email</Label>
            <Input id="email" type="text" placeholder="email" ></Input>
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="password" ></Input>
            <Button>LOGIN</Button><br></br>

            <BaseText>Don't have an account? <a href="https://google.com">Register</a></BaseText>
        </Form>
    </Container>
}

export default LoginForm