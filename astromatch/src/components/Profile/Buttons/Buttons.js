import React from "react";
import styled from "styled-components";
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    
    .buttonLike {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        border: 1px solid green;
        color: green;
        background-color: white;
        width: 64px;
        height: 64px;
        border-radius: 100%;

      &:hover {
        cursor: pointer;
        color: white;
        background-color: green;
        transform: scale(1.1);
      }

      &:focus {
        color: white;
        background-color: darkgreen;
        border: darkgreen;
      }
    }

    .buttonDislike {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        border: 1px solid red;
        color: red;
        background-color: white;
        width: 64px;
        height: 64px;
        border-radius: 100%;

      &:hover {
        cursor: pointer;
        color: white;
        background-color: red;
        transform: scale(1.1);
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
        <button className="buttonDislike" onClick={props.onClickX}><BiDislike /></button>
        <button className="buttonLike" onClick={props.onClickV}><BiLike /></button>
    </ButtonsContainer>
  );
}