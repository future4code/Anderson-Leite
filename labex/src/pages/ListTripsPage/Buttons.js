import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 60px;
    margin-top: 40px;

    button {
        color: white;
        background-color: orange;
        opacity: 0.8;
        font-weight: bold;
        width: 180px;
        height: 60px;
        border: 2px solid white;
        border-radius: 8px;

        p {
            font-size: 20px;
        }

        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

function Buttons(props) {
    return (
        <ButtonsContainer>
            <button onClick={props.onClickVoltar}><p>Voltar</p></button>
            <button onClick={props.onClickInscrever}><p>Inscrever-se</p></button>
        </ButtonsContainer>
    );
}

export default Buttons;