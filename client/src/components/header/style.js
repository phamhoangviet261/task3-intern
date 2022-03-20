import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 50px;
    background: #123456;
    color: #fff;
`;

export const Item = styled.a`
    text-decoration: none;
    padding: 10px 20px;
    color: #fff;
    &:hover{
        background: #fff;
        color: #123456;
    }
`;