import React from "react";
import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { AiOutlineHome } from "react-icons/ai"
import { GiPadlock } from "react-icons/gi"

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 260px;
    height: 100px;

    button {
        display: flex;
        width: 40px;
        height: 40px;
        border: 2px solid orange;
        border-radius: 8px;
        background-color: #1E222B;
        color: orange;
        align-items: center;
        justify-content: center;
        
        :hover {
            background-color: orange;
            color: #1E222B;
            cursor: pointer;
        }

        .icons {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
        }
    }
    
`

const ButtonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 12px;
    }
`

function Buttons(props) {
  return (
    <ButtonsContainer>
        <ButtonCard><button onClick={props.onClickHomePage}><AiOutlineHome className="icons"/></button><p>Home</p></ButtonCard>
        <ButtonCard><button onClick={props.onClickListTripsPage}><GoRocket className="icons"/></button><p>Viagens</p></ButtonCard>
        <ButtonCard><button onClick={props.onClickAdminHomePage}><FaUserAstronaut className="icons"/></button><p>Admin</p></ButtonCard>
        <ButtonCard><button onClick={props.onClickLoginPage}><GiPadlock className="icons"/></button><p>Login</p></ButtonCard>
    </ButtonsContainer>
  );
}

export default Buttons;