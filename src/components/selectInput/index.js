import styled from "styled-components";

const SelectTag = styled.select`
    padding:15px 25px;
    border-radius: 30px;
    border: none;
    outline:none;
`


const Select = ()=>{
    return <> Filter by <SelectTag name="category" >
            <option>---</option>
            <option value="delux" >Delux</option>
            <option value="king" >King</option>
            <option value="queen" >Queen</option>
            <option value="Single" >Single</option>
        </SelectTag></>

}

export default Select