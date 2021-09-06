import React from "react";
import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa"
import { RiHeartsFill } from "react-icons/ri"

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid orange;

    .astronaut {
        width: 32px;
        height: 32px;
        color: orange;
    }

    .matches {
        width: 32px;
        height: 32px;
        color: red;
    }
`

export function NavBar(props) {
  return (
    <NavBarContainer>
      <FaUserAstronaut className="astronaut" onClick={props.goToProfilePage}/>
      <h2>astromatch</h2>
      <RiHeartsFill className="matches" onClick={props.goToMatchList}/>
    </NavBarContainer>
  );
}