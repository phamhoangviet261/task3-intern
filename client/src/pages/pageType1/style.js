import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100px;
    display: flex;   
    
`;

export const Editor = styled.div`
    width: 20%;
    min-height: 100px;
    & > textarea {
        width: 100%;
        max-width: 100%;
        resize: none;
    }
`;

export const FamilyTree = styled.div`
    width: 80%;
    min-height: 100px;
    padding-left: 30px;
`;

export const Row = styled.div`
    display: flex;
`;

