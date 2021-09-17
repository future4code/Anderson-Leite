import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 200px;

    button {
        color: white;
        background-color: orange;
        opacity: 0.7;
        font-weight: bold;
        width: 180px;
        height: 60px;
        border: 2px solid white;
        border-radius: 8px;

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
            <button onClick={props.onClickAdmin}><p>Admin.</p></button>
        </ButtonsContainer>
    );
}

export default Buttons;