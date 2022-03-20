import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100px;
    display: flex;   
    flex-direction: column;
`;

export const InputYOB = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    /* min-height: 60px; */
    margin: 30px;
    padding-bottom: 30px;
    & > input{
        padding: 10px 5px;
        margin-left: 30px;
    }
    border-bottom: 1px solid #123456;
`;

export const SubmitBtn = styled.div`
    width: 100px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #123456;
    border-radius: 10px;
    text-align: center;
    margin-left: 30px;
    transition: all 0.4s ease;
    &:hover{
        background: #123456;
        color: #fff;
    }
`;

export const FamilyTree = styled.div`
    width: 100%;
    min-height: 100px;
    padding-left: 30px;
    padding-top: 15px;
`;

export const Row = styled.div`
    display: flex;
`;

