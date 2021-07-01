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
            <Card background="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roomName="Levante" rating="4.9" />
        </CardWrapper>

        <CardWrapper>
            <Card background="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roomName="Lexur" rating="4.6" />
        </CardWrapper>

        <CardWrapper>
            <Card background="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roomName="Deluxa" rating="5.0" />
        </CardWrapper>

        <CardWrapper>
            <Card roomName="Magnifea" rating="4.9" />
        </CardWrapper>
    </SecWrapper>
}

export default SectCard
