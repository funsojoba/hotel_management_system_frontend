import styled from "styled-components";

const ImageStyle = styled.img`
    width: 100%;
`

const Img = ({src}) => {
    return <ImageStyle src={src}/>
}

export default Img