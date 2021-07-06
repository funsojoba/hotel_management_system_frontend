import Footer from "../../components/footer";
import Card from "../../components/rooms/card";
import Comments from "./comments";

import Details from "./details";
import ImageSide from "./imagesSide";
import RoomRating from "./rating";

import styled from "styled-components";

const SecOneDiv = styled.div`
    display: flex;
    width: 100%;
`

const CardWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Hr = styled.hr`
    color: #f9f9f9;
    width:60%;
    margin: auto;
`


const SingleRoom = ()=>{
    return <>
    <SecOneDiv>
        <ImageSide />
        <Details />
    </SecOneDiv>

    <div>
            <RoomRating />
    </div>
    
    <div>
        <Comments />
    </div>

    <Hr />
    <CardWrapper>
        <Card roomName="Pobius" rating="10" />
        <Card roomName="Pobius" rating="10" />
        <Card roomName="Pobius" rating="10" />
        <Card roomName="Pobius" rating="10" />
    </CardWrapper>



    <Footer />

    </>
}

export default SingleRoom
