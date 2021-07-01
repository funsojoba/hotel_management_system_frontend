import styled from "styled-components";
import Card from "../rooms/card";


const SecWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:50px;
    justify-content: space-around;

    @media only screen and (max-width:800px){
        padding:20px
    }
`

const CardWrapper = styled.div`
    padding:15px;
`

const SectCard = () => {
    return <SecWrapper>
        <CardWrapper>
            <Card roomName="Levante" rating="4.9" />
        </CardWrapper>

        <CardWrapper>
            <Card roomName="Lexur" rating="4.6" />
        </CardWrapper>
       
       <CardWrapper>
            <Card roomName="Deluxa" rating="5.0" />
       </CardWrapper>

       <CardWrapper>
            <Card roomName="Magnifea" rating="4.9" />
       </CardWrapper>
    </SecWrapper>
}

export default SectCard
