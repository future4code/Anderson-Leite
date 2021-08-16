import React from "react";
import styled from "styled-components";
import axios from "axios";
import createPlaylist from "./createPlaylist";

const EstiloMenuLateral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: orange;
  align-items: flex-start;
  
  h1 {
    margin-left: 30px;
  }

  p {
    margin-left: 30px;
  }
`

class MenuLateral extends React.Component {
  render() {
    return (
      <div className="menuLateral">
        <EstiloMenuLateral>
          <h1>Labefy</h1>
          {/* <p>Início</p> */}
          <p>Criar Playlist</p>
          <p>Suas Playlists</p>
        </EstiloMenuLateral>
      </div>
    );
  }
}

export default MenuLateral;