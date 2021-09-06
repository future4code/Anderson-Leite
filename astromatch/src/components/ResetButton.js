import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../constants/urls';
import { BiRefresh } from 'react-icons/bi';

const ResetButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    
    .reset {
        color: blueviolet;
        width: 32px;
        height: 32px;
        cursor: pointer;
        padding: 8px;
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
        <ResetButtonContainer>
            <BiRefresh className="reset" onClick={onClickReset}/>
        </ResetButtonContainer>
    );
}