import styled from "styled-components";
import Text from "./text";
import SectCard from "./sectCard";


const SecWrapper = styled.div`
    padding:20px;
`

const SectionFour = ()=>{
    return <SecWrapper>
        <Text />
        <SectCard />
    </SecWrapper>
}

export default SectionFour