import styled from "styled-components";

const Div = styled.div`
    padding:30px;
    border-radius:30px;
    box-shadow:0 0 30px rgba(0,0,0,.4);

    @media only screen and(max-width:850px){
        padding:15px;
        border-radius: 15px;
    }
`

const Text = ({children})=>{
    return <Div>{children}</Div>
}

export default Text