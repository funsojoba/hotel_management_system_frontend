import styled from "styled-components";
import { Link } from "react-router-dom";

const MyLinkDiv = styled.span`
    display: inline-block;
    border-radius: 50px;
    background:#0C336C;
    padding:15px 30px;
    color: #FFDA7C;
    letter-spacing: 2px;
    transition: all 100ms ease-in;
    width: ${props => props.width ? props.width : 'auto'};
    font-family: 'Poppins', sans-serif;
    text-align:center;
    box-shadow: 0px 5px 30px rgba(10,64,115,.26);

    &:hover{
        background:#0C336C;
        box-shadow: 0 5px 30px rgba(12, 51, 108, .5);
    }
`

const CardLink = ({ children, href }) => {
    return <MyLinkDiv>
        <Link to={href}>{children}</Link>
    </MyLinkDiv>
}

export default CardLink