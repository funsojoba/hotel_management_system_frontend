import styled from "styled-components";
import Img from "../img";
import ImgWrapper from "../img/imgWrapper";
import Text from "./text";


const SecThreeDiv = styled.div`
    display: flex;
    padding:30px;
    flex-wrap: wrap;
    @media only screen and (max-width:800px){
        flex-direction: column;
    }
`

const SectionThree = () => {
    return <SecThreeDiv>
        <Text />
        <ImgWrapper>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1625102218/hms_files/Rectangle_156_n53zol.png" />
        </ImgWrapper>
    </SecThreeDiv>
}

export default SectionThree
