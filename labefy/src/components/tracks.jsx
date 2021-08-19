import React from "react";
import styled from "styled-components";

const EstiloTracks = styled.div`
  display: flex;
  background-color: orange;
  width: 88%;
  height: 100vh;
  color: #1C1C1C;
  align-items: center;
  justify-content: center;
`

export default class Tracks extends React.Component { 
  render() {
    return (
      <EstiloTracks>
        <div className="tracks">
          TRACKS!
        </div>
      </EstiloTracks>
    );
  }
}