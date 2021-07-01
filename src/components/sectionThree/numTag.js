import styled from "styled-components";

const Nums = styled.div`
    background: ${props => props.background ? props.background : "#8CC5E4"};
    border-radius: 30px;
    padding: 20px;
    color:#fff;
    width:70px;
    display: flex;
    justify-content: center;
`

const NumTag = ({children, background})=>{
    return <Nums background={background}>
        {children}
    </Nums>
}

export default NumTag