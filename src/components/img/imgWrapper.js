import styled from "styled-components";


const ImgWrapperStyle = styled.div`
    flex:1;
    padding: 50px;

    @media only screen and (max-width:800px){
        padding:10px
    }
`


const ImgWrapper = ({children}) => {
    return <ImgWrapperStyle>
       {children}
    </ImgWrapperStyle>
}

export default ImgWrapper