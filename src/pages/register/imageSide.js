import styled from "styled-components";
import Img from "../../components/img";
import P from "../../components/typography/p";


const ImageDiv = styled.div`
    flex:1;
    background:rgba(0,0,0,.7);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 30px;
    overflow:hidden;

    &::after{
        content: "";
        background:url('https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
        background-size: cover;
        background-position: center;
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        z-index:-1;
    }

    @media only screen and (max-width:650px){
        display: none;
    }
`

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const ImageSide = () => {
    return <ImageDiv>

        <Div >
            <ImageWrapper>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1624670217/LogoIcon_ddsdxj.png" />
            </ImageWrapper>
            <P textAlign="center" fontSize="15px" >Welcome on-board</P>
        </Div>
    </ImageDiv>
}

export default ImageSide