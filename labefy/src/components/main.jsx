import React from "react";
import styled from "styled-components";
import Background from "../assets/Background.jpg";

const EstiloMain = styled.div`
  display: flex;
  background-color: #1C1C1C;
  width: 88%;
  height: 100vh;
  color: orange;
  text-shadow: 4px 2px 4px black;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${Background});
  background-size: cover;
  font-size: 20px;

  h1 {
    margin-top: 12px;
  }
`
export default class Main extends React.Component {
  render() {
    return (
      <EstiloMain>
        <div className="main">
          <h1>Ouça as suas músicas favoritas de graça e sem anúncios!</h1>
        </div>
      </EstiloMain>
    );
  }
}