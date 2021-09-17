import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;

  button {
      width: 80px;
  }
`

function Buttons(props) {
  return (
    <ButtonsContainer>
        <button onClick={props.onClickClear}>Limpar</button>
        <button onClick={props.onClickSubmit}>Enviar</button>
    </ButtonsContainer>
  );
}

export default Buttons;