import styled from "styled-components";
import H4 from "../typography/h4";
import P from "../typography/p";
import MyLink from "../forms/myLink";
import NumTag from "./numTag";


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
    margin-top: 20px;
`

const NumWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`

const Text = ()=>{
    return <TextWrapper>
        <NumWrapper>
            <NumTag>01</NumTag>
        </NumWrapper>

        <br />
        <H4 textAlign="left">Something Nice</H4>
        <br />
        <P textAlign="left" fontSize="1em" color="#051D40" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio tempore culpa odit animi a libero ab nemo, laborum, corrupti, et repellat nobis iste tenetur ex sint rem nesciunt? Distinctio?</P>
        <br />
        <NumWrapper>
            <NumTag background="#92A5EF">02</NumTag>
        </NumWrapper>
        <H4 textAlign="left">Something Good</H4>
        <P textAlign="left" fontSize="1em" color="#051D40" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel labore adipisci dolores saepe officia similique sint, maxime ducimus cumque amet. Harum assumenda modi atque ullam sed. Quo, odio nihil?
        </P>
        <br />

        <NumWrapper>
            <NumTag background="#92EFD9">03</NumTag>
        </NumWrapper>
        <H4 textAlign="left">Something Good</H4>
        <P textAlign="left" fontSize="1em" color="#051D40" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel labore adipisci dolores saepe officia similique sint, maxime ducimus cumque amet. Harum assumenda modi atque ullam sed. Quo, odio nihil?
        </P>
        <BtnWrapper>
            <MyLink>
                EXPLORE
            </MyLink>
        </BtnWrapper>
    </TextWrapper>
}

export default Text