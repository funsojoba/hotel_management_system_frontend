import styled from "styled-components";

const Div = styled.div`
    padding:20px;
    border-radius:30px;
    background:#fff;
    margin-bottom: ${props => props.bottom ? props.bottom : 'none'};

    @media only screen and(max-width:850px){
        padding:12px;
        border-radius: 15px;
    }
`

const Text = ({children, bottom})=>{
    return <Div bottom={bottom} >{children}</Div>
}

export default Text