import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Buttons from "./Buttons";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    color: orange;
    background-color: #1E222B;
    position: absolute;
    top: 0;
    left: 0;

    h1 span {
        display: inline-block;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(to right, white 78%, orange 22%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 90px;
    }
`

const LogoAndButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    margin: 0 60px 0 60px;
`

function Header() {
    const history = useHistory()
  
    const goToHomePage = () => {
        history.push("/")
    }
  
    const goToAdminHomePage = () => {
        history.push("/login")
    }
  
    const goToListTripsPage = () => {
        history.push("/trips/list")
    }
  
    return (
        <HeaderContainer>
            <LogoAndButtons>
                <h1><span>LabeX</span></h1>
                <Buttons onClickHomePage={goToHomePage} onClickListTripsPage={goToListTripsPage} onClickAdminHomePage={goToAdminHomePage}/>
            </LogoAndButtons>
        </HeaderContainer>
    );
}
  
export default Header;