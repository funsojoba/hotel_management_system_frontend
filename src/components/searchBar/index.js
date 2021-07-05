import styled from 'styled-components'
import Input from '../forms/input'

const SearchDiv = styled.div`
    background: #051D40;
    border-radius:50px;
    padding:20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    margin-top:30px;
    margin-bottom: 30px;
`

const TextDiv = styled.div`
    color:#EDF5FF;
    flex:3;
`
const SearchSection = styled.div`
    flex:1;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:relative
`

const InputDiv = styled.input`
    padding:15px 25px;
    border-radius: 30px;
    border:none;
    width:100%;
`

const Icon = styled.div`
    position: absolute;
    right: 10px;
    top:50%;
    transform: translateY(-50%);
    color:#C4C4C4;
`

const SearchBar = () => {
    return <SearchDiv>
        <TextDiv>
            <p>lrem ipsum</p>
        </TextDiv>
        <SearchSection>
            <Icon><i className="fas fa-search fa-lg"></i></Icon>
            <InputDiv type="search" placeholder="search" />
        </SearchSection>
    </SearchDiv>
}

export default SearchBar
