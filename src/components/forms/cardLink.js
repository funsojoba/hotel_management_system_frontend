import styled from "styled-components";
import { Link } from "react-router-dom";

const MyLinkDiv = styled.span`
    display: inline-block;
    border-radius: 50px;
    border: slid 1px #F53E6A;
    background:${props => props.bgDanger ? "#F53E6A" : "#051D40"};
    padding:15px 30px;
    color: #FFDA7C;
    letter-spacing: 2px;
    transition: all 100ms ease-in;
    width: ${props => props.width ? props.width : 'auto'};
    font-family: 'Poppins', sans-serif;
    text-align:center;

    &:hover{
        background:#0C336C;
    }
`

const CardLink = ({ children, href }) => {
    return <MyLinkDiv>
        <Link to={href}>{children}</Link>
    </MyLinkDiv>
}

export default CardLink