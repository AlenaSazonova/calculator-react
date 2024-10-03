import React, { useState } from 'react';
import {
    CalculatorWrapper,
    Display,
    ButtonContainer,
    CalcButton
}
    from './PanelCalculator.style';


function PanelCalculator() {
    const [displayValue, setDisplayValue] = useState('');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);



    const handleButtonClick = (value) => {
        setDisplayValue((prevValue) => prevValue + value)
    }

    const handleCleanInput = () => {
        setDisplayValue('');
        setPreviousValue(null);
        setOperator(null);
    }

    const handleOperatorClick = (operator) => {
        if (displayValue !== '') {
            setPreviousValue(displayValue);
            setDisplayValue('');
            setOperator(operator);
        }
    };


    const handleEqualClick = () => {
        if (operator && previousValue !== null && displayValue !== '') {

            const current = parseFloat(displayValue);
            const previous = parseFloat(previousValue);

            let result;

            if (operator === '+') {
                result = previous + current;
            } else if (operator === '-') {
                result = previous - current;
            } else if (operator === '*') {
                result = previous * current;
            } else if (operator === '/') {
                result = previous / current;
            }

            setDisplayValue(String(result));
            setPreviousValue(null);
            setOperator(null);
        }
    }


    return (
        <CalculatorWrapper>
            <Display type="text" value={displayValue} readOnly />
            <ButtonContainer>
                <CalcButton onClick={() => handleButtonClick('7')}>7</CalcButton>
                <CalcButton onClick={() => handleButtonClick('8')}>8</CalcButton>
                <CalcButton onClick={() => handleButtonClick('9')}>9</CalcButton>
                <CalcButton onClick={() => handleOperatorClick('+')}>+</CalcButton>
            </ButtonContainer>
            <ButtonContainer>
                <CalcButton onClick={() => handleButtonClick('4')}>4</CalcButton>
                <CalcButton onClick={() => handleButtonClick('5')}>5</CalcButton>
                <CalcButton onClick={() => handleButtonClick('6')}>6</CalcButton>
                <CalcButton onClick={() => handleOperatorClick('-')}>-</CalcButton>
            </ButtonContainer>
            <ButtonContainer>
                <CalcButton onClick={() => handleButtonClick('1')}>1</CalcButton>
                <CalcButton onClick={() => handleButtonClick('2')}>2</CalcButton>
                <CalcButton onClick={() => handleButtonClick('3')}>3</CalcButton>
                <CalcButton onClick={() => handleOperatorClick('*')}>*</CalcButton>
            </ButtonContainer>
            <ButtonContainer>
                <CalcButton onClick={() => handleButtonClick('0')}>0</CalcButton>
                <CalcButton onClick={handleCleanInput}>C</CalcButton>
                <CalcButton onClick={handleEqualClick}>=</CalcButton>
                <CalcButton onClick={() => handleOperatorClick('/')}>/</CalcButton>
            </ButtonContainer>
        </CalculatorWrapper>
    );
}

export default PanelCalculator;