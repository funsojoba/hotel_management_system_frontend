import Text from "../../components/typography/textWrapper";
import H4 from "../../components/typography/h4";
import P from "../../components/typography/p";
import Button from "../../components/forms/button";
import styled from "styled-components";


const DetailDiv = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`

const Details = ()=>{
    return<DetailDiv>
        <Text bottom="20px">
            <H4 textAlign="left" fontSize="1.5em" >Single Room</H4>
        </Text>

        <Text bottom="20px">
            <H4 textAlign="left" fontSize="1.5em" >50 000</H4>
        </Text>

        <Text bottom="20px">
            <P textAlign="left" color="#000" fontSize="1em" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil fuga odit fugiat ipsam magnam libero adipisci, alias impedit, quaerat dolorem quod ad minus voluptatum cum praesentium ea? Rem, consequatur?</P>
            <br />
            <P textAlign="left" color="#000" fontSize="1em" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil fuga odit fugiat ipsam magnam libero adipisci, alias impedit, quaerat dolorem quod ad minus voluptatum cum praesentium ea? Rem, consequatur?</P>

        </Text>

        <Button>Book Room</Button>

    </DetailDiv>
}

export default Details