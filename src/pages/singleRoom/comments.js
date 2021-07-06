import styled from "styled-components";
import P from "../../components/typography/p";

const CommentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 50px;

    @media only screen and (max-wdith:650px){
        padding:20px
    }
`

const Single = styled.div`
    width: 300px;
    position: relative;
    background: #fff;
    padding:30px;
    border-radius:30px;
`

const Name = styled.span`
    position: absolute;
    right: 10px;
    bottom: -10px;
    color: #f9f9f9;
    padding:5px 15px;
    background:#888888;
    border-radius: 10px;
`


const Comments = ()=>{
    return <CommentDiv>
        <Single>
            <P fontSize="1em" color="#525252" textAlign="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis doloribus eligendi consectetur deserunt architecto ab quod veritatis facere. Odio porro magnam sapiente rerum delectus debitis necessitatibus ducimus. Officia, tempora.
            </P>
            <Name>Danny Tompson</Name>
        </Single>
        <Single>
            <P fontSize="1em" color="#525252" textAlign="left">
                deserunt architecto ab quod veritatis facere. Odio porro magnam sapiente rerum delectus debitis necessitatibus ducimus. Officia, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis doloribus eligendi consectetur
            </P>
            <Name>James Kenedy</Name>
        </Single>
        <Single>
            <P fontSize="1em" color="#525252" textAlign="left">
                Odio porro magnam sapiente rerum delectus ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis doloribus eligendi consectetur deserunt architecto ab quod veritatis facere. debitis necessitatibus ducimus. Officia, tempora.
            </P>
            <Name>Elizabeth Kingston</Name>
        </Single>
    </CommentDiv>
}


export default Comments