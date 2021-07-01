import styled from "styled-components";
import Text from "./text";
import ImgWrapper from "../img/imgWrapper";
import Img from "../img";


const SecTwoStyle = styled.div`
    display: flex;
    padding:30px;
    flex-wrap: wrap;
    @media only screen and (max-width:800px){
        flex-direction: column;
    }
`

const SectionTwo = ()=>{
    return <SecTwoStyle>
        <ImgWrapper>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1625100892/hms_files/Group_142_uuvl0v.png" />;
        </ImgWrapper>
        <Text />
    </SecTwoStyle>
}


export default SectionTwo