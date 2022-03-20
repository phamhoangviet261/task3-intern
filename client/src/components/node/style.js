import styled from "styled-components";

export const Container = styled.div`
    width: 170px;
    padding: 5px 15px;
    border: solid #123456;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover{
        background: #123456;
        color: #fff;
    }
    & > p{
        margin: 0;
        margin-bottom: 5px;
    }
`