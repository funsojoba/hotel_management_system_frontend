import styled from "styled-components";
import Rating from "../../components/rooms/card/rating";

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;
    border-radius:30px;
    background:#fff;

    @media only screen and(max-width:850px){
        padding:12px;
        border-radius: 15px;
    }
`


const RoomRating = ()=>{
    return <TextWrapper>
        <div>

        <Rating rating="4.8" /> 
        </div>

        <div>
            Make for Kings
        </div>
    </TextWrapper>
}

export default RoomRating