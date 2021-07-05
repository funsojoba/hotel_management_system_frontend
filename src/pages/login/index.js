import ImageSide from "./imageSide";
import Forms from "./form";

import styled from "styled-components";


const Container = styled.div`
    display: flex;
    height: 100vh;
`


const Login = ()=>{
    return <Container>
        <Forms />
        <ImageSide />
    </Container>
}

export default Login