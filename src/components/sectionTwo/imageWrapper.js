import styled from "styled-components";
import Img from "../img";


const ImgWrapperStyle = styled.div`
    flex:1;
    padding: 50px;
    display:flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width:800px){
        padding:10px
    }
`


const ImageWrapper = () => {
    return <ImgWrapperStyle>
        <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1625100892/hms_files/Group_142_uuvl0v.png" />;
    </ImgWrapperStyle>
}

export default ImageWrapper