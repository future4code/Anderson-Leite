import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
// import MenuLateral from "./components/Main/menuLateral";
import Footer from "./components/Footer/footer";
import createPlaylist from "./components/Main/createPlaylist";

const EstiloPagina = styled.div`
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr 5fr; */
  height: 100vh;
  background-color: orange;
  color: white;
`

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EstiloPagina>
          <Header />
          <Main />
          <Footer />
        </EstiloPagina>
      </div>
    );
  }
}       