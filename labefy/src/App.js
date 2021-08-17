import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/header";
import MenuLateral from "./components/menuLateral";
import Footer from "./components/footer";

const EstiloPagina = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  background-color: #1C1C1C;
  /* color: orange; */
`

export default class App extends React.Component {
  state = {
    paginaAtual: "home"
  }

  // escolherPagina = () => {
  //   switch (this.setState.paginaAtual){
      
  //   }
  // }

  goToHome = () => {
    this.setState({paginaAtual: "home"})
  }

  render() {
    return (
      <div className="App">
        <EstiloPagina>
          {/* <Header /> */}
          <MenuLateral />
          <Footer />
        </EstiloPagina>
      </div>
    );
  }
}       