import styled from "styled-components";
import H1 from "../typography/h1";
import P from "../typography/p";
import BigBtn from "../bigBtn";

const TextWrapper = styled.div`
    padding:50px;
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:800px){
        padding:10px
    }
`

const BtnWrapper = styled.div`
    margin-top:20px
`

const Text = ()=>{
    return <TextWrapper>
        <H1 textAlign="left" fontSize="3em">LUXURY WITH <br></br> CLASS</H1>
        <br />
        <P textAlign="left" fontSize="1em" color="#051D40" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio vitae porro dolorum, deserunt dignissimos ipsum voluptates! Tempora, officiis impedit vel mollitia iusto, magni fuga numquam architecto reiciendis sed ullam.</P>
        <br />
        <BtnWrapper>
            <BigBtn>EXPLORE</BigBtn>
        </BtnWrapper>
    </TextWrapper>
}

export default Text