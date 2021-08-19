import React from "react";
import styled from "styled-components";

const EstiloMain = styled.div`
  display: flex;
  background-color: #1C1C1C;
  width: 88%;
  height: 100vh;
  color: orange;
  align-items: center;
  justify-content: center;
`

export default class Main extends React.Component { 
  render() {
    return (
      <EstiloMain>
        <div className="main">
          LABEFY!
        </div>
      </EstiloMain>
    );
  }
}       