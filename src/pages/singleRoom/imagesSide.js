import styled from "styled-components";
import Img from "../../components/img";

const Side = styled.div`
    flex:2;
    display: flex;
    flex-direction:column;
    box-sizing: border-box;
    margin:15px;
`

const ImageWrapper = styled.div`
    border-radius: 30px;
    flex:1;
    height: 500px;
    overflow: hidden;
    /* margin: 10px; */
`

const SmallImgs = styled.div`
    padding:15px;
    display: flex;
`

const SmImgWrapper = styled.div`
    border-radius: 40px;
    flex:1;
    height: 170px;
    overflow: hidden;
    margin:10px;
    background:rgba(0,0,0,.7);
    position: relative;
    cursor: pointer;
    transition: all 300ms ease-in;
    &:after{
        content: "";
        background: url(${props => props.background ? props.background : "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"});
        background-size: cover;
        background-position: center;
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        z-index:-1;
    }

    &:hover{
        background:rgba(0,0,0,.2)
    }

`

const ImageSide = ()=>{
    return <Side>
        <ImageWrapper>
            <Img src="https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_960_720.jpg" />
        </ImageWrapper>
        
        <SmallImgs>

            <SmImgWrapper />
            <SmImgWrapper background="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg" />
            <SmImgWrapper background="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg" />
            <SmImgWrapper background="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_960_720.jpg" />

        </SmallImgs>
        
    </Side>
}

export default ImageSide