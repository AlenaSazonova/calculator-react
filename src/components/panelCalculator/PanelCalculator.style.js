import styled from "styled-components";


export const CalculatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
`;


export const Display = styled.input`
    border-radius: 10px;
    border: 4px solid #c5c0c0;
    max-width: 392px;
    width: 100%;
    height: 100px;
    font-size: 80px;
    font-weight: 400;
    line-height: 262%;
    text-align: right;
    padding-right: 30px;
`;


export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
`;


export const CalcButton = styled.button`
    width: 100px;
    height: 100px;
    margin: 5px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &:hover {
        background: #c5c0c0;
    }
`;