import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-around;
    
    .buttonLike {
      font-size: 28px;
      border: 1px solid green;
      color: green;
      background-color: white;
      width: 60px;
      height: 60px;
      border-radius: 100%;

      &:hover {
        color: white;
        background-color: green;
        width: 64px;
        height: 64px;
        transition: ease all 0.3s;
      }

      &:focus {
        color: white;
        background-color: darkgreen;
        border: darkgreen;
      }
    }

    .buttonDislike {
      font-size: 28px;
      border: 1px solid red;
      color: red;
      background-color: white;
      width: 60px;
      height: 60px;
      border-radius: 100%;

      &:hover {
        color: white;
        background-color: red;
        width: 64px;
        height: 64px;
        transition: ease all 0.3s;
      }

      &:focus {
        color: white;
        background-color: darkred;
        border: darkred;
      }
    }
`

export function Buttons(props) {
  return (
    <ButtonsContainer>
        <button className="buttonDislike" onClick={props.onClickX}>X</button>
        <button className="buttonLike" onClick={props.onClickV}>V</button>
    </ButtonsContainer>
  );
}