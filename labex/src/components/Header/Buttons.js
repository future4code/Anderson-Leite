import React from "react";
import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { AiOutlineHome } from "react-icons/ai"

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 138px;
    height: 100%;

    button {
        width: 40px;
        height: 40px;
        border: 2px solid orange;
        border-radius: 8px;
        background-color: #1E222B;
        color: orange;
        /* justify-content: center;
        align-items: flex-end; */
        
        :hover {
            background-color: orange;
            color: #1E222B;
            cursor: pointer;
        }
    }
    
    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 28px;
    }
`

function Buttons(props) {
  return (
    <ButtonsContainer>
        <button onClick={props.onClickHomePage}><AiOutlineHome className="icons"/></button>
        <button onClick={props.onClickListTripsPage}><GoRocket className="icons"/></button>
        <button onClick={props.onClickAdminHomePage}><FaUserAstronaut className="icons"/></button>
    </ButtonsContainer>
  );
}

export default Buttons;