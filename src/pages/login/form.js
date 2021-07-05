import BigBtn from "../../components/bigBtn";
import Input from "../../components/forms/input";
import styled from "styled-components";
import H4 from "../../components/typography/h4";
import P from "../../components/typography/p";
import { Link } from "react-router-dom";

const FormWrapper = styled.div`
    padding:50px;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const MyForm = styled.form`
    padding:30px;
    width: 100%;
    border-radius:30px;
    background:#fff;
    box-sizing: border-box;
`

const Label = styled.label`
    color:#979797;
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 10px;
`

const Forms = ()=>{
    return <FormWrapper>
        <MyForm>
            <H4>Log in</H4>
            <br />
            
            <Label htmlFor="email">Email</Label>
            <Input 
                placeholder="johndoe@example.com" 
                type="email"
                id="email"
                name="email"
                />
            
            <Label htmlFor="password" >Password</Label>
            <Input 
                placeholder="**********" 
                type="password"
                name="password"
                id="password"
                />
            
            <BigBtn width="100%" type="submit">Log In</BigBtn>
            <br />
            <br />
            <P fontSize="13px" color="#979797">Don't have an account? <Link to="/signup">sign up</Link></P>
        </MyForm>
    </FormWrapper>
}

export default Forms