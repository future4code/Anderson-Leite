import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../constants/urls';

const ButtonContainer = styled.div`
    .button {
    font-size: 28px;
    border: 1px solid green;
    color: green;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    max-width: 100%;
    border-radius: 100%;
    }
`

export function ResetButton() {
    const onClickReset = () => {
        axios.put(`${BASE_URL}/clear`)
        .then((response) => {
            alert("A lista de perfis e matches foi limpa!")
        });
    }

    return (
        <ButtonContainer>
            <button onClick={onClickReset}>Limpar perfis e matches</button>
        </ButtonContainer>
    );
}