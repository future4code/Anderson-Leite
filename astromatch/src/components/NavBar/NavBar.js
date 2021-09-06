import React from "react";
import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa"
import { RiHeartsFill } from "react-icons/ri"

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid orange;

    .astronaut {
        width: 32px;
        height: 32px;
        color: orange;
        cursor: pointer;

        :hover {
            transform: scale(1.1);
        }
    }

    .matches {
        width: 32px;
        height: 32px;
        color: red;
        cursor: pointer;
        
        :hover {
            transform: scale(1.1);
        }
    }

    h1 span {
	display: inline-block;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, red 50%, orange 50%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
}
`

export function NavBar(props) {
  return (
    <NavBarContainer>
      <FaUserAstronaut className="astronaut" onClick={props.goToHomePage}/>
      <h1><span>astromatch</span></h1>
      <RiHeartsFill className="matches" onClick={props.goToMatchesPage}/>
    </NavBarContainer>
  );
}