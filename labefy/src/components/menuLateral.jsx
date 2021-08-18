import React from "react";
import styled from "styled-components";
import Playlists from "./playlists";
import Logo from "../assets/Logo.png";

const EstiloMenuLateral = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 12%;
  height: 100vh;
  background-color: black;
  color: orange;
  align-items: flex-start;
  z-index: 10;

  .logo-nome {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 24px;
    width: 36px;
    height: 36px;
  }

  h1 {
    color: white;
    margin-left: 8px;
  }
`

export default class MenuLateral extends React.Component {
  render() {
    return (
      <div className="menuLateral">
        <EstiloMenuLateral>
          <div className="logo-nome">
            <img src={Logo}/>
            <h1>Labefy</h1>
          </div>
          <Playlists />
        </EstiloMenuLateral>
      </div>
    );
  }
}